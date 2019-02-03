// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const dishPhotos = sequelizeClient.define(
    'dish_photos',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'DishPhoto_id'
      },
      Dish_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'restaurantdishes',
          key: 'Dish_id'
        }
      },
      Path: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      tableName: 'dishphotos',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  dishPhotos.associate = function(models) {
    dishPhotos.belongsTo(models.restaurant_dishes, {
      foreignKey: 'Dish_id'
    });
  };

  return dishPhotos;
};
