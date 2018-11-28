/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('restschedule', {
    Schedule_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Restaurant_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'restaurants',
        key: 'Restaurant_id'
      }
    },
    Day: {
      type: DataTypes.ENUM('Mon','Tue','Wed','Thu','Fri','Sat','Sun'),
      allowNull: false
    },
    Opened: {
      type: DataTypes.TIME,
      allowNull: false
    },
    Closed: {
      type: DataTypes.TIME,
      allowNull: false
    },
    Deadline: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'restschedule'
  });
};
