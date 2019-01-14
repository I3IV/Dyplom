// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const restschedule = sequelizeClient.define(
    'restschedule',
    {
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
        type: DataTypes.ENUM('Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'),
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
    },
    {
      tableName: 'restschedule'
    }
  );

  // eslint-disable-next-line no-unused-vars
  restschedule.associate = function(models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return restschedule;
};
