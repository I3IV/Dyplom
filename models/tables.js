/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "tables",
    {
      Table_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      Restaurant_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "restaurants",
          key: "Restaurant_id"
        }
      },
      SeatsNumber: {
        type: DataTypes.INTEGER(4),
        allowNull: true
      },
      TableNumber: {
        type: DataTypes.STRING(6),
        allowNull: true
      }
    },
    {
      tableName: "tables"
    }
  );
};
