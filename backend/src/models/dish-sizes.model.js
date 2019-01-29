// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get("sequelizeClient");
  const dishSizes = sequelizeClient.define(
    "dish_sizes",
    {
      id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        primaryKey: true,
        field: "DishSize_id"
      },
      DishSizeName: {
        type: DataTypes.STRING(20),
        allowNull: false
      }
    },
    {
      tableName: "dishsizes",
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  dishSizes.associate = function(models) {
    dishSizes.belongsToMany(models.restaurant_dishes, {
      foreignKey: "DishSize_id",
      through: "rest_dish_sizes"
    });
  };

  return dishSizes;
};
