/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('restaurantfeedbacks', {
    RestaurantFeedback_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Restaurant_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'restaurants',
        key: 'Restaurant_id'
      }
    },
    Cust_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'customers',
        key: 'Cust_id'
      }
    },
    RestaurantRate: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    RestaurantFeedback: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'restaurantfeedbacks'
  });
};
