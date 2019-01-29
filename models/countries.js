/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "countries",
    {
      Country_id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        primaryKey: true
      },
      CountryName: {
        type: DataTypes.STRING(56),
        allowNull: true
      }
    },
    {
      tableName: "countries"
    }
  );
};
