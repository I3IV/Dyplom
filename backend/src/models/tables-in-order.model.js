// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const tablesInOrder = sequelizeClient.define(
    'tables_in_order',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'TableInOrder_id'
      },
      Orders_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'orders',
          key: 'Order_id'
        }
      },
      Table_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'tables',
          key: 'Table_id'
        }
      }
    },
    {
      tableName: 'tablesinorder',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  tablesInOrder.associate = function(models) {
    tablesInOrder.belongsTo(models.orders, {
      foreignKey: 'Orders_id'
    });
    tablesInOrder.belongsTo(models.tables, {
      foreignKey: 'Table_id'
    });
  };

  return tablesInOrder;
};
