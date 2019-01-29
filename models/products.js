/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "products",
    {
      Product_id: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
        primaryKey: true
      },
      ProductCategory_id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        references: {
          model: "productcategories",
          key: "ProductCategory_id"
        }
      },
      ProductName: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      Available: {
        type: DataTypes.INTEGER(4),
        allowNull: true
      }
    },
    {
      tableName: "products"
    }
  );
};
