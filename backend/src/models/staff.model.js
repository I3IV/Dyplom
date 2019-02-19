// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const staff = sequelizeClient.define(
    'staff',
    {
      id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        primaryKey: true,
        field: 'Staff_id'
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
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'StaffEmail'
      },
      StaffPhone: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(128),
        allowNull: false,
        field: 'StaffPassword'
      },
      BlockedStaff: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      }
    },
    {
      tableName: 'staff',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  staff.associate = function(models) {
    staff.belongsTo(models.restaurants, {
      foreignKey: 'Restaurant_id'
    });
    staff.belongsTo(models.job_positions, {
      foreignKey: 'Position_id'
    });
  };

  return staff;
};
