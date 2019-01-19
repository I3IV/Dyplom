// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const addresses = sequelizeClient.define(
    'addresses',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'Address_id'
      },
      City_id: {
        type: DataTypes.INTEGER(3),
        allowNull: false,
        references: {
          model: 'cities',
          key: 'City_id'
        }
      },
      StreetName: {
        type: DataTypes.STRING(65),
        allowNull: false
      },
      StreetNumber: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      ZipCode: {
        type: DataTypes.STRING(10),
        allowNull: false
      }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      },
      tableName: 'addresses'
    }
  );

  // eslint-disable-next-line no-unused-vars
  addresses.associate = function(models) {
    addresses.hasMany(models.restaurants, {
      foreignKey: 'Address_id'
    });
  };

  return addresses;
};
