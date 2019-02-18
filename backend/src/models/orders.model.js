// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const orders = sequelizeClient.define(
    'orders',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'Order_id'
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
        type: 'DOUBLE',
        allowNull: false
      }
    },
    {
      tableName: 'orders',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  orders.associate = function(models) {
    orders.belongsTo(models.payment_types, {
      foreignKey: 'PaymentType_id'
    });
    orders.belongsTo(models.customers, {
      foreignKey: 'Cust_id'
    });
    orders.belongsTo(models.restaurants, {
      foreignKey: 'Restaurant_id'
    });
    orders.belongsTo(models.order_status, {
      foreignKey: 'OrderStatus_id'
    });
    orders.hasMany(models.order_dishes, {
      foreignKey: 'Order_id'
    });
    orders.belongsToMany(models.tables, {
      foreignKey: 'Orders_id',
      through: 'tables-in-order'
    });
  };

  return orders;
};
