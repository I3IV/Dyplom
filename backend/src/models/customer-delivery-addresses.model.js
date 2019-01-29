// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get("sequelizeClient");
  const customerDeliveryAddresses = sequelizeClient.define(
    "customer_delivery_addresses",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "DeliveryAddress_id"
      },
      Cust_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "customers",
          key: "Cust_id"
        }
      },
      Address_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "addresses",
          key: "Address_id"
        }
      }
    },
    {
      tableName: "customerdeliveryaddresses",
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  customerDeliveryAddresses.associate = function(models) {
    customerDeliveryAddresses.belongsTo(models.customers, {
      foreignKey: "Cust_id"
    });
    customerDeliveryAddresses.belongsTo(models.addresses, {
      foreignKey: "Address_id"
    });
    customerDeliveryAddresses.hasMany(models.schedule_items, {
      foreignKey: "Address_id"
    });
  };

  return customerDeliveryAddresses;
};
