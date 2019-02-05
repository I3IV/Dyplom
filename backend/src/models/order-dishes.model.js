// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const orderDishes = sequelizeClient.define(
    'order_dishes',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'OrderDish_id'
      },
      Order_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'orders',
          key: 'Order_id'
        }
      },
      Dish_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'dishesinmenu',
          key: 'MenuDish_id'
        }
      },
      Ammount: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      },
      OrderDishPrice: {
        type: 'DOUBLE',
        allowNull: false
      }
    },
    {
      tableName: 'orderdishes',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  orderDishes.associate = function(models) {
    orderDishes.belongsTo(models.orders, {
      foreignKey: 'Order_id'
    });
    orderDishes.belongsTo(models.dishes_in_menu, {
      foreignKey: 'Dish_id'
    });
    orderDishes.belongsToMany(models.products, {
      foreignKey: 'OrderDish_id',
      through: 'additional_products_for_order'
    });
  };

  return orderDishes;
};
