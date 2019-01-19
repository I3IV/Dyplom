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
      tableName: 'restaurants'
    }
  );

  // eslint-disable-next-line no-unused-vars
  restaurants.associate = function(models) {
    restaurants.hasMany(models.restschedule, {
      as: 'DaySchedules',
      foreignKey: 'Restaurant_id'
    });
  };

  return restaurants;
};
