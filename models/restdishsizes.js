/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('restdishsizes', {
    RestDishSize_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    RestaurantDish_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'restaurantdishes',
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
  }, {
    tableName: 'restdishsizes'
  });
};
