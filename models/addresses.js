/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "addresses",
    {
      Address_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      City_id: {
        type: DataTypes.INTEGER(3),
        allowNull: false,
        references: {
          model: "cities",
          key: "City_id"
        }
      },
      StreetName: {
        type: DataTypes.STRING(65),
        allowNull: false
      },
      StreetNumber: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      ZipCode: {
        type: DataTypes.STRING(10),
        allowNull: false
      }
    },
    {
      tableName: "addresses"
    }
  );
};
