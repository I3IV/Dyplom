// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const foodDelivery = sequelizeClient.define(
    'food_delivery',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'FoodDelivery_id'
      },
      Cust_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'customers',
          key: 'Cust_id'
        }
      },
      Address_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'addresses',
          key: 'Address_id'
        }
      },
      Order_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'orders',
          key: 'Order_id'
        }
      },
      Phone: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      FoodDeliveryDateTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      Comment: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      tableName: 'fooddelivery',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  foodDelivery.associate = function(models) {
    foodDelivery.belongsTo(models.orders, {
      foreignKey: 'Order_id'
    });
    foodDelivery.belongsTo(models.addresses, {
      foreignKey: 'Address_id'
    });
  };

  return foodDelivery;
};
