// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const productCategories = sequelizeClient.define(
    'product_categories',
    {
      id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'ProductCategory_id'
      },
      CategoryName: {
        type: DataTypes.STRING(30),
        allowNull: false
      }
    },
    {
      tableName: 'productcategories',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  productCategories.associate = function(models) {
    productCategories.hasMany(models.products, {
      foreignKey: 'ProductCategory_id'
    });
  };

  return productCategories;
};
