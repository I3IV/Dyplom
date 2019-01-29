/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "promotions",
    {
      Promo_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      PromoDescription: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      StartPromoDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      EndPromoDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      Promocode: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    },
    {
      tableName: "promotions"
    }
  );
};
