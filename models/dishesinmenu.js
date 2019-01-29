/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "dishesinmenu",
    {
      MenuDish_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      MenuCategory_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "menucategories",
          key: "MenuCategory_id"
        }
      },
      RestDishSize_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "restdishsizes",
          key: "RestDishSize_id"
        }
      },
      Available: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      },
      DishPrice: {
        type: "DOUBLE",
        allowNull: false
      }
    },
    {
      tableName: "dishesinmenu"
    }
  );
};
