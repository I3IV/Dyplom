/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "scheduleitems",
    {
      ScheduleItem_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      Cust_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "customers",
          key: "Cust_id"
        }
      },
      Restaurant_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "restaurants",
          key: "Restaurant_id"
        }
      },
      ItemStatus_id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        references: {
          model: "itemstatus",
          key: "ItemStatus_id"
        }
      },
      Address_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "customerdeliveryaddresses",
          key: "DeliveryAddress_id"
        }
      },
      ScheduleItemDateTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      ScheduleItemTotalPrice: {
        type: "DOUBLE",
        allowNull: false
      }
    },
    {
      tableName: "scheduleitems"
    }
  );
};
