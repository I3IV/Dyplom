/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "productcategories",
    {
      ProductCategory_id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        primaryKey: true
      },
      CategoryName: {
        type: DataTypes.STRING(30),
        allowNull: false
      }
    },
    {
      tableName: "productcategories"
    }
  );
};
