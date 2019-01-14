// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const customers = sequelizeClient.define(
    'customers',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'Cust_id'
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
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'CustEmail'
      },
      password: {
        type: DataTypes.STRING(128),
        allowNull: false,
        field: 'CustPassword'
      },
      CustPhone: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      BlockedUser: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      }
    },
    {
      tableName: 'customers',
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  customers.associate = function(models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return customers;
};
