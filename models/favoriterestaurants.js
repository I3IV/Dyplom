/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "favoriterestaurants",
    {
      FavoriteRestaurant_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      Cust_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "customers",
          key: "Cust_id"
        }
      },
      Restaurant_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "restaurants",
          key: "Restaurant_id"
        }
      }
    },
    {
      tableName: "favoriterestaurants"
    }
  );
};
