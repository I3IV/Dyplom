/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "dishfeedbackphotos",
    {
      DishFeedback_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "dishfeedbacks",
          key: "DishFeedBack_id"
        }
      },
      Path: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      tableName: "dishfeedbackphotos"
    }
  );
};
