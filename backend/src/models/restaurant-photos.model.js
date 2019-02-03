// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const restaurantPhotos = sequelizeClient.define(
    'restaurant_photos',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'RestaurantPhoto_id'
      },
      Restaurant_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'restaurants',
          key: 'Restaurant_id'
        }
      },
      Path: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      tableName: 'restaurantphotos',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  restaurantPhotos.associate = function(models) {
    restaurantPhotos.belongsTo(models.restaurants, {
      foreignKey: 'Restaurant_id'
    });
  };

  return restaurantPhotos;
};
