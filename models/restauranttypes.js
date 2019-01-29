/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "restauranttypes",
    {
      RestaurantType_id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        primaryKey: true
      },
      RestaurantTypeName: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      RestaurantTypeDescription: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      tableName: "restauranttypes"
    }
  );
};
