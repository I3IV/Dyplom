/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers', {
    Cust_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    City_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      references: {
        model: 'cities',
        key: 'City_id'
      }
    },
    CustName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    CustSurname: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    CustEmail: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CustPassword: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    CustPhone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    BlockedUser: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'customers'
  });
};
