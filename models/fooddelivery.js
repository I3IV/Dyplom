/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fooddelivery', {
    FoodDelivery_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Cust_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'customers',
        key: 'Cust_id'
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
    Order_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'orders',
        key: 'Order_id'
      }
    },
    Phone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FoodDeliveryDateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Comment: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'fooddelivery'
  });
};
