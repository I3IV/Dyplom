// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const reservations = sequelizeClient.define(
    'reservations',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'Reservation_id'
      },
      Cust_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: { model: 'customers', key: 'Cust_id' }
      },
      Phone: { type: DataTypes.STRING(15), allowNull: true },
      Confirmed: { type: DataTypes.INTEGER(4), allowNull: false },
      CreationDateTime: { type: DataTypes.DATE, allowNull: false },
      ReservationDateTime: { type: DataTypes.DATE, allowNull: false },
      DepositPaid: { type: DataTypes.INTEGER(4), allowNull: false },
      CancelFee: { type: 'DOUBLE', allowNull: false }
    },
    {
      tableName: 'reservations',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  reservations.associate = function(models) {
    reservations.belongsTo(models.customers, {
      foreignKey: 'Cust_id'
    });
    reservations.belongsToMany(models.tables, {
      foreignKey: 'Reservation_id',
      through: 'tables-in-reservation'
    });
  };

  return reservations;
};
