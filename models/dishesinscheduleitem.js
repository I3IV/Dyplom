/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "dishesinscheduleitem",
    {
      DishInScheduleItem_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      Dish_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "dishesinmenu",
          key: "MenuDish_id"
        }
      },
      ScheduleItem_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "scheduleitems",
          key: "ScheduleItem_id"
        }
      },
      Ammount: {
        type: DataTypes.INTEGER(4),
        allowNull: true
      },
      ScheduleItemPrice: {
        type: "DOUBLE",
        allowNull: true
      }
    },
    {
      tableName: "dishesinscheduleitem"
    }
  );
};
