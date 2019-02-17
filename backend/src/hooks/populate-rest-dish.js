// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const R = require('ramda');
// eslint-disable-next-line no-unused-vars
module.exports = function(options = {}) {
  return async context => {
    const { app, result } = context;

    const restDishes = result.data;
    const newData = await Promise.all(
      restDishes.map(async dish => {
        const restaurantFromDB = await app
          .service('restaurants')
          .findOne({ query: { Restaurant_id: dish.Restaurant_id } });

        const restaurant = R.pick(['RestaurantName','address'], restaurantFromDB);
        const RestaurantName = restaurant.RestaurantName;
        const City_id = restaurant.address.City_id;
        const { CategoryName, Menu_id, id: Category_id } = await app
          .service('dishes-in-menu')
          .findOne({
            query: {
              RestDishSize_id: dish.dish_sizes[0].rest_dish_sizes.id
            }
          })
          .then(res => res.menu_category);
        const newSizes = await Promise.all(
          dish.dish_sizes.map(async size => {
            const dishInMenu = await app
              .service('dishes-in-menu')
              .findOne({
                query: {
                  RestDishSize_id: size.rest_dish_sizes.id
                }
              })
              .then(res => res);

            return {
              ...size.toJSON(),
              price: dishInMenu ? dishInMenu.DishPrice : -1,
              DishInMenuId: dishInMenu.id
            };
          })
        ).then(res => res.filter(size => size.price !== -1));
        const defaultPhoto = dish.dish_photos
          ? dish.toJSON().dish_photos[0].Path
          : undefined;
        return {
          ...dish.toJSON(),
          RestaurantName,
          CategoryName,
          City_id,
          Category_id,
          Menu_id,
          dish_sizes: newSizes,
          defaultPhoto: defaultPhoto
        };
      })
    ).then(res => res.filter(dish => dish.dish_sizes.length !== 0));
    context.result.data = newData;
    return context;
  };
};
