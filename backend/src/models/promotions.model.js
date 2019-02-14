// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const promotions = sequelizeClient.define(
    'promotions',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'Promo_id'
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
      tableName: 'promotions',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  promotions.associate = function(models) {
    promotions.belongsToMany(models.dishes_in_menu, {
      foreignKey: 'Promotion_id',
      through: 'dishes_in_promotion'
    });
  };

  return promotions;
};
