/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "dishesinpromotion",
    {
      PromoDish_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      Promotion_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "promotions",
          key: "Promo_id"
        }
      },
      MenuDish_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "dishesinmenu",
          key: "MenuDish_id"
        }
      },
      DiscountValue: {
        type: "DOUBLE",
        allowNull: false
      },
      PromoPrice: {
        type: "DOUBLE",
        allowNull: false
      }
    },
    {
      tableName: "dishesinpromotion"
    }
  );
};
