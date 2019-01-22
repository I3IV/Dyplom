// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const restDishSizes = sequelizeClient.define(
    'rest_dish_sizes',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        field: 'RestDishSize_id'
      },
      RestaurantDish_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'restaurant_dishes',
          key: 'Dish_id'
        }
      },
      DishSize_id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        references: {
          model: 'dishsizes',
          key: 'DishSize_id'
        }
      }
    },
    {
      tableName: 'restdishsizes',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  restDishSizes.associate = function(models) {
    restDishSizes.hasMany(models.dishes_in_menu, {
      foreignKey: 'RestDishSize_id'
    });
    restDishSizes.belongsTo(models.restaurant_dishes, {
      foreignKey: 'RestaurantDish_id'
    });
    restDishSizes.belongsTo(models.dish_sizes, {
      foreignKey: 'DishSize_id'
    });
  };

  return restDishSizes;
};
