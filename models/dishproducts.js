/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "dishproducts",
    {
      MenuDishProduct_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      Product_id: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
        references: {
          model: "products",
          key: "Product_id"
        }
      },
      MenuDish_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "dishesinmenu",
          key: "MenuDish_id"
        }
      }
    },
    {
      tableName: "dishproducts"
    }
  );
};
