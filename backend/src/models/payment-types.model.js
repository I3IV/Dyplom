// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const paymentTypes = sequelizeClient.define(
    'payment_types',
    {
      id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'PaymentType_id'
      },
      PaymentTypeName: {
        type: DataTypes.STRING(25),
        allowNull: false
      }
    },
    {
      tableName: 'paymenttypes',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  paymentTypes.associate = function(models) {
    paymentTypes.hasMany(models.orders, {
      foreignKey: 'PaymentType_id'
    });
    // paymentTypes.belongsToMany(models.customers, {
    //   foreignKey: 'PaymentType_id',
    //   through: 'pref-cust-payment-types'
    // });
  };

  return paymentTypes;
};
