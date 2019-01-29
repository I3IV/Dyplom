// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get("sequelizeClient");
  const additionalProductsForItem = sequelizeClient.define(
    "additional_products_for_item",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "AdditionalProductForItem_id"
      },
      Product_id: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
        references: {
          model: "products",
          key: "Product_id"
        }
      },
      ScheduleItem_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "scheduleitems",
          key: "ScheduleItem_id"
        }
      }
    },
    {
      tableName: "additionalproductsforitem",
      beforeCount(options) {
        options.raw = true;
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  additionalProductsForItem.associate = function(models) {
    additionalProductsForItem.belongsTo(models.schedule_items, {
      foreignKey: "ScheduleItem_id"
    });
    additionalProductsForItem.belongsTo(models.products, {
      foreignKey: "Product_id"
    });
  };

  return additionalProductsForItem;
};
