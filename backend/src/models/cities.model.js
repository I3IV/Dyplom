// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get("sequelizeClient");
  const cities = sequelizeClient.define(
    "cities",
    {
      id: {
        type: DataTypes.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        field: "City_id"
      },
      Country_id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        references: {
          model: "countries",
          key: "Country_id"
        }
      },
      CityName: {
        type: DataTypes.STRING(85),
        allowNull: true
      }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      },
      tableName: "cities"
    }
  );

  // eslint-disable-next-line no-unused-vars
  cities.associate = function(models) {
    cities.belongsTo(models.countries, {
      foreignKey: "Country_id"
    });
    cities.hasMany(models.addresses, {
      foreignKey: "City_id"
    });
  };

  return cities;
};
