/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "paymenttypes",
    {
      PaymentType_id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        primaryKey: true
      },
      PaymentTypeName: {
        type: DataTypes.STRING(25),
        allowNull: false
      }
    },
    {
      tableName: "paymenttypes"
    }
  );
};
