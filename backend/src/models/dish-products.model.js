// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const dishProducts = sequelizeClient.define(
    'dish_products',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'MenuDishProduct_id'
      },
      Product_id: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
        references: {
          model: 'products',
          key: 'Product_id'
        }
      },
      RestaurantDish_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'restaurantdishes',
          key: 'RestaurantDish_id'
        }
      }
    },
    {
      tableName: 'dishproducts',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  dishProducts.associate = function(models) {
    dishProducts.belongsTo(models.restaurant_dishes, {
      foreignKey: 'RestaurantDish_id'
    });
    dishProducts.belongsTo(models.products, {
      foreignKey: 'Product_id'
    });
  };

  return dishProducts;
};
