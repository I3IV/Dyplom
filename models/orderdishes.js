/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "orderdishes",
    {
      OrderDish_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      Order_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "orders",
          key: "Order_id"
        }
      },
      Dish_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "dishesinmenu",
          key: "MenuDish_id"
        }
      },
      Ammount: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      },
      OrderDishPrice: {
        type: "DOUBLE",
        allowNull: false
      }
    },
    {
      tableName: "orderdishes"
    }
  );
};
