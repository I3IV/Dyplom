/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feedbackanswers', {
    FeedbackAnswer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Feedback_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'restaurantfeedbacks',
        key: 'RestaurantFeedback_id'
      }
    },
    FeedBackAnswer: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'feedbackanswers'
  });
};
