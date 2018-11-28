/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customerdeliveryaddresses', {
    DeliveryAddress_id: {
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
    Address_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'addresses',
        key: 'Address_id'
      }
    }
  }, {
    tableName: 'customerdeliveryaddresses'
  });
};
