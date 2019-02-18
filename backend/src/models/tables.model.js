// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const tables = sequelizeClient.define(
    'tables',
    {
      if: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        field: 'Table_id'
      },
      Restaurant_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'restaurants',
          key: 'Restaurant_id'
        }
      },
      SeatsNumber: {
        type: DataTypes.INTEGER(4),
        allowNull: true
      },
      TableNumber: {
        type: DataTypes.STRING(6),
        allowNull: true
      }
    },
    {
      tableName: 'tables',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  tables.associate = function(models) {
    tables.belongsTo(models.restaurants, {
      foreignKey: 'Restaurant_id',
    });
    tables.belongsToMany(models.orders, {
      foreignKey: 'Table_id',
      through: 'tables-in-order'
    });
    tables.belongsToMany(models.reservations, {
      foreignKey: 'Table_id',
      through: 'tables-in-reservation'
    });
  };

  return tables;
};
