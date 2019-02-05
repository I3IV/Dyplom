// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const additionalProductsForOrder = sequelizeClient.define(
    'additional_products_for_order',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'AdditionalProductForOrder_id'
      },
      Product_id: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
        references: {
          model: 'products',
          key: 'Product_id'
        }
      },
      OrderDish_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'orderdishes',
          key: 'OrderDish_id'
        }
      }
    },
    {
      tableName: 'additionalproductsfororder',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  additionalProductsForOrder.associate = function(models) {
    additionalProductsForOrder.belongsTo(models.products, {
      foreignKey: 'Product_id'
    });
    additionalProductsForOrder.belongsTo(models.order_dishes, {
      foreignKey: 'OrderDish_id'
    });
  };

  return additionalProductsForOrder;
};
