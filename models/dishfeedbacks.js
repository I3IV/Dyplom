/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "dishfeedbacks",
    {
      DishFeedBack_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      DishRate: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      },
      DishFeedback: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      Customer_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "customers",
          key: "Cust_id"
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
      tableName: "dishfeedbacks"
    }
  );
};
