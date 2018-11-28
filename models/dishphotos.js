/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dishphotos', {
    Dish_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'restaurantdishes',
        key: 'Dish_id'
      }
    },
    Path: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'dishphotos'
  });
};
