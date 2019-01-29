/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "additionalproductsforitem",
    {
      AdditionalProductForItem_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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
      tableName: "additionalproductsforitem"
    }
  );
};
