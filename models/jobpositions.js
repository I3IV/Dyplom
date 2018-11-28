/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobpositions', {
    Position_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true
    },
    PositionName: {
      type: DataTypes.STRING(40),
      allowNull: false
    }
  }, {
    tableName: 'jobpositions'
  });
};
