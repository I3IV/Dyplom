// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const scheduleItems = sequelizeClient.define(
    'schedule_items',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'ScheduleItem_id'
      },
      Cust_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'customers',
          key: 'Cust_id'
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
      ItemStatus_id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        references: {
          model: 'itemstatus',
          key: 'ItemStatus_id'
        }
      },
      Address_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'customerdeliveryaddresses',
          key: 'DeliveryAddress_id'
        }
      },
      ScheduleItemDateTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      ScheduleItemTotalPrice: {
        type: 'DOUBLE',
        allowNull: false
      }
    },
    {
      tableName: 'scheduleitems',
      beforeCount(options) {
        options.raw = true;
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  scheduleItems.associate = function(models) {
    scheduleItems.belongsTo(models.restaurants, {
      foreignKey: 'Restaurant_id'
    });
    scheduleItems.belongsTo(models.customers, {
      foreignKey: 'Cust_id'
    });
    scheduleItems.belongsTo(models.item_status, {
      foreignKey: 'ItemStatus_id'
    });
    scheduleItems.belongsTo(models.customer_delivery_addresses, {
      foreignKey: 'Address_id'
    });
    scheduleItems.hasMany(models.additional_products_for_item, {
      foreignKey: 'ScheduleItem_id'
    });
    scheduleItems.hasMany(models.dishes_in_schedule_item, {
      foreignKey: 'ScheduleItem_id'
    });
  };

  return scheduleItems;
};
