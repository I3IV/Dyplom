/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "restaurantfeedbackphotos",
    {
      RestaurantFeedback_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "restaurantfeedbacks",
          key: "RestaurantFeedback_id"
        }
      },
      Path: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      tableName: "restaurantfeedbackphotos"
    }
  );
};
