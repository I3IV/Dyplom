// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get("sequelizeClient");
  const menu = sequelizeClient.define(
    "menu",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "Menu_id"
      },
      MenuName: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "Main"
      },
      Restaurant_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "restaurants",
          key: "Restaurant_id"
        }
      },
      StartMenuDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      EndMenuDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      }
    },
    {
      tableName: "menu",
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  menu.associate = function(models) {
    menu.belongsTo(models.restaurants, {
      foreignKey: "Restaurant_id"
    });
    menu.hasMany(models.menu_categories, {
      foreignKey: "Menu_id"
    });
  };

  return menu;
};
