/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dishsizes', {
    DishSize_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true
    },
    DishSizeName: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'dishsizes'
  });
};
