/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    Order_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    OrderStatus_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      references: {
        model: 'orderstatus',
        key: 'OrderStatus_id'
      }
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
    PaymentType_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      references: {
        model: 'paymenttypes',
        key: 'PaymentType_id'
      }
    },
    Preferences: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OrderDateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    OrderTotalPrice: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'orders'
  });
};
