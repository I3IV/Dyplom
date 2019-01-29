/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "restaurantphotos",
    {
      Restaurant_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "restaurants",
          key: "Restaurant_id"
        }
      },
      Path: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      tableName: "restaurantphotos"
    }
  );
};
