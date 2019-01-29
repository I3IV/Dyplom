/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "additionalproductsfororder",
    {
      AdditionalProductForOrder_id: {
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
      OrderDish_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "orderdishes",
          key: "OrderDish_id"
        }
      }
    },
    {
      tableName: "additionalproductsfororder"
    }
  );
};
