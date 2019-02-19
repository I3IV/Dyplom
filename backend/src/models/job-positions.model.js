// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const jobPositions = sequelizeClient.define(
    'job_positions',
    {
      id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        primaryKey: true,
        field: 'Position_id'
      },
      PositionName: {
        type: DataTypes.STRING(40),
        allowNull: false
      }
    },
    {
      tableName: 'jobpositions',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  jobPositions.associate = function(models) {
    jobPositions.hasMany(models.staff, {
      foreignKey: 'Position_id'
    });
  };

  return jobPositions;
};
