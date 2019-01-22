// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const menuCategories = sequelizeClient.define(
    'menu_categories',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        field: 'MenuCategory_id'
      },
      Menu_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'menu',
          key: 'Menu_id'
        }
      },
      CategoryName: {
        type: DataTypes.STRING(45),
        allowNull: false
      }
    },
    {
      tableName: 'menucategories',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  menuCategories.associate = function(models) {
    menuCategories.belongsTo(models.menu, {
      foreignKey: 'Menu_id'
    });
    menuCategories.hasMany(models.dishes_in_menu, {
      foreignKey: 'MenuCategory_id'
    });
  };

  return menuCategories;
};
