// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const products = sequelizeClient.define(
    'products',
    {
      id: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
        primaryKey: true,
        field: 'Product_id'
      },
      ProductCategory_id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        references: {
          model: 'productcategories',
          key: 'ProductCategory_id'
        }
      },
      ProductName: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      Available: {
        type: DataTypes.INTEGER(4),
        allowNull: true
      }
    },
    {
      tableName: 'products',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  products.associate = function(models) {
    products.belongsToMany(models.restaurant_dishes, {
      foreignKey: 'Product_id',
      through: 'dish_products'
    });
    products.belongsToMany(models.dishes_in_schedule_item, {
      foreignKey: 'Product_id',
      through: 'additional_products_for_item'
    });
  };

  return products;
};
