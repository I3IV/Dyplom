/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('staff', {
    Staff_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true
    },
    Restaurant_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'restaurants',
        key: 'Restaurant_id'
      }
    },
    Position_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      references: {
        model: 'jobpositions',
        key: 'Position_id'
      }
    },
    StaffName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    StaffSurname: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    StaffEmail: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    StaffPhone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    StaffPassword: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    BlockedStaff: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'staff'
  });
};
