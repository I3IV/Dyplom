// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const dishesInPromotion = sequelizeClient.define(
    'dishes_in_promotion',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'PromoDish_id'
      },
      Promotion_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'promotions',
          key: 'Promo_id'
        }
      },
      MenuDish_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'dishesinmenu',
          key: 'MenuDish_id'
        }
      },
      DiscountValue: {
        type: 'DOUBLE',
        allowNull: false
      },
      PromoPrice: {
        type: 'DOUBLE',
        allowNull: false
      }
    },
    {
      tableName: 'dishesinpromotion',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  dishesInPromotion.associate = function(models) {
    dishesInPromotion.belongsTo(models.promotions, {
      foreignKey: 'Promotion_id'
    });
    dishesInPromotion.belongsTo(models.dishes_in_menu, {
      foreignKey: 'MenuDish_id'
    });
  };

  return dishesInPromotion;
};
