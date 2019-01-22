// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const dishesInMenu = sequelizeClient.define(
    'dishes_in_menu',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'MenuDish_id'
      },
      MenuCategory_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'menucategories',
          key: 'MenuCategory_id'
        }
      },
      RestDishSize_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'restdishsizes',
          key: 'RestDishSize_id'
        }
      },
      Available: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      },
      DishPrice: {
        type: 'DOUBLE',
        allowNull: false
      }
    },
    {
      tableName: 'dishesinmenu',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  dishesInMenu.associate = function(models) {
    dishesInMenu.belongsTo(models.menu_categories, {
      foreignKey: 'MenuCategory_id'
    });
    dishesInMenu.belongsTo(models.rest_dish_sizes, {
      foreignKey: 'RestDishSize_id'
    });
  };

  return dishesInMenu;
};
