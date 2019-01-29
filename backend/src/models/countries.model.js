// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get("sequelizeClient");
  const countries = sequelizeClient.define(
    "countries",
    {
      id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        primaryKey: true,
        field: "Country_id"
      },
      CountryName: {
        type: DataTypes.STRING(56),
        allowNull: true
      }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      },
      tableName: "countries"
    }
  );

  // eslint-disable-next-line no-unused-vars
  countries.associate = function(models) {
    countries.hasMany(models.cities, {
      foreignKey: "Country_id"
    });
  };

  return countries;
};
