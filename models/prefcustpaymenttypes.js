/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prefcustpaymenttypes', {
    CustPaymentType_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
  }, {
    tableName: 'prefcustpaymenttypes'
  });
};
