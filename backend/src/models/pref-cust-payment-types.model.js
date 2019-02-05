// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const prefCustPaymentTypes = sequelizeClient.define(
    'pref_cust_payment_types',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'CustPaymentType_id'
      },
      Cust_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'customers',
          key: 'Cust_id'
        }
      },
      PaymentType_id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        references: {
          model: 'paymenttypes',
          key: 'PaymentType_id'
        }
      }
    },
    {
      tableName: 'prefcustpaymenttypes',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  prefCustPaymentTypes.associate = function(models) {
    prefCustPaymentTypes.belongsTo(models.payment_types, {
      foreignKey: 'PaymentType_id'
    });
    prefCustPaymentTypes.belongsTo(models.customers, {
      foreignKey: 'Cust_id'
    });
  };

  return prefCustPaymentTypes;
};
