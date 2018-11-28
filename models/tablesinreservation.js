/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tablesinreservation', {
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
  }, {
    tableName: 'tablesinreservation'
  });
};
