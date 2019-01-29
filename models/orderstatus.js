/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "orderstatus",
    {
      OrderStatus_id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        primaryKey: true
      },
      OrderStatusName: {
        type: DataTypes.STRING(20),
        allowNull: false
      }
    },
    {
      tableName: "orderstatus"
    }
  );
};
