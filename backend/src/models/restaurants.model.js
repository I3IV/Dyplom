// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const restaurants = sequelizeClient.define(
    'restaurants',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        field: 'Restaurant_id'
      },
      RestaurantType_id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        references: {
          model: 'restauranttypes',
          key: 'RestaurantType_id'
        }
      },
      Address_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'addresses',
          key: 'Address_id'
        }
      },
      RestaurantName: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      RestaurantDescription: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      tableName: 'restaurants',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  restaurants.associate = function(models) {
    restaurants.belongsTo(models.addresses, {
      foreignKey: 'Address_id'
    });
    restaurants.hasMany(models.restschedule, {
      as: 'schedule',
      foreignKey: 'Restaurant_id'
    });
    restaurants.hasMany(models.restaurant_photos, {
      foreignKey: 'Restaurant_id'
    });
  };

  return restaurants;
};
