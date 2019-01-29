/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "menucategories",
    {
      MenuCategory_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      Menu_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "menu",
          key: "Menu_id"
        }
      },
      CategoryName: {
        type: DataTypes.STRING(45),
        allowNull: false
      }
    },
    {
      tableName: "menucategories"
    }
  );
};
