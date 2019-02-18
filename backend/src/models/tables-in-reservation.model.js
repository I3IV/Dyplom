// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const tablesInReservation = sequelizeClient.define(
    'tables_in_reservation',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'TableInReservation_id'
      },
      Reservation_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'reservations',
          key: 'Reservation_id'
        }
      },
      Table_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'tables',
          key: 'Table_id'
        }
      }
    },
    {
      tableName: 'tablesinreservation',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  tablesInReservation.associate = function(models) {
    tablesInReservation.belongsTo(models.reservations, {
      foreignKey: 'Reservation_id'
    });
    tablesInReservation.belongsTo(models.tables, {
      foreignKey: 'Table_id'
    });
  };

  return tablesInReservation;
};
