// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const orderStatus = sequelizeClient.define(
    'order_status',
    {
      id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'OrderStatus_id'
      },
      OrderStatusName: {
        type: DataTypes.STRING(20),
        allowNull: false
      }
    },
    {
      tableName: 'orderstatus',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  orderStatus.associate = function(models) {
    orderStatus.hasMany(models.orders, {
      foreignKey: 'OrderStatus_id'
    });
  };

  return orderStatus;
};
