// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const restaurantDishes = sequelizeClient.define(
    'restaurant_dishes',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'Dish_id'
      },
      Restaurant_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'restaurants',
          key: 'Restaurant_id'
        }
      },
      DishName: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      DishDescription: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      tableName: 'restaurantdishes',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  restaurantDishes.associate = function(models) {
    restaurantDishes.belongsTo(models.restaurants, {
      foreignKey: 'Restaurant_id'
    });
    restaurantDishes.belongsToMany(models.dish_sizes, {
      foreignKey: 'RestaurantDish_id',
      through: 'rest_dish_sizes'
    });
    restaurantDishes.belongsToMany(models.products, {
      foreignKey: 'RestaurantDish_id',
      through: 'dish_products'
    });
    restaurantDishes.hasMany(models.dish_photos, {
      foreignKey: 'Dish_id'
    });
  };

  return restaurantDishes;
};
