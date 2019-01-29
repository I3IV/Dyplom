// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function(options = {}) {
  return async context => {
    const { app, result } = context;

    const dishes = result.data;
    const newData = await Promise.all(
      dishes.map(async dish => {
        const restDish = await app
          .service("rest-dish-sizes")
          .findOne({
            query: {
              id: dish.RestDishSize_id
            }
          })
          .then(res => ({
            Size: res.dish_size.DishSizeName,
            Name: res.restaurant_dish.DishName,
            Description: res.restaurant_dish.DishDescription,
            Restaurant_id: res.restaurant_dish.Restaurant_id
          }));

        const { Name, Description, Size, Restaurant_id } = restDish;
        const RestaurantName = await app
          .service("restaurants")
          .get(Restaurant_id)
          .then(res => res.RestaurantName);
        return {
          ...dish.toJSON(),
          Name,
          Size,
          Description,
          RestaurantName
        };
      })
    );
    result.data = newData;
    return context;
  };
};
