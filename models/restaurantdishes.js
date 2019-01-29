/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "restaurantdishes",
    {
      Dish_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      Restaurant_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "restaurants",
          key: "Restaurant_id"
        }
      },
      DishName: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      DishDescription: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      tableName: "restaurantdishes"
    }
  );
};
