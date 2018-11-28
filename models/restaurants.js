/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('restaurants', {
    Restaurant_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    RestaurantType_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      references: {
        model: 'restauranttypes',
        key: 'RestaurantType_id'
      }
    },
    Address_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'addresses',
        key: 'Address_id'
      }
    },
    RestaurantName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    RestaurantDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'restaurants'
  });
};
