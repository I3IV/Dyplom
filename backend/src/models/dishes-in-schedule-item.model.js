// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get("sequelizeClient");
  const dishesInScheduleItem = sequelizeClient.define(
    "dishes_in_schedule_item",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "DishInScheduleItem_id"
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
      tableName: "dishesinscheduleitem",
      beforeCount(options) {
        options.raw = true;
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  dishesInScheduleItem.associate = function(models) {
    dishesInScheduleItem.belongsTo(models.schedule_items, {
      foreignKey: "ScheduleItem_id"
    });
    dishesInScheduleItem.belongsTo(models.dishes_in_menu, {
      foreignKey: "Dish_id"
    });
  };

  return dishesInScheduleItem;
};
