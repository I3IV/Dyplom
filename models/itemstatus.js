/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "itemstatus",
    {
      ItemStatus_id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        primaryKey: true
      },
      ItemStatusName: {
        type: DataTypes.STRING(20),
        allowNull: false
      }
    },
    {
      tableName: "itemstatus"
    }
  );
};
