/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cities', {
    City_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true
    },
    Country_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      references: {
        model: 'countries',
        key: 'Country_id'
      }
    },
    CityName: {
      type: DataTypes.STRING(85),
      allowNull: true
    }
  }, {
    tableName: 'cities'
  });
};
