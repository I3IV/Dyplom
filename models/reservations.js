/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "reservations",
    {
      Reservation_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      Cust_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "customers",
          key: "Cust_id"
        }
      },
      Phone: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      Confirmed: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      },
      CreationDateTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      ReservationDateTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      DepositPaid: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      },
      CancelFee: {
        type: "DOUBLE",
        allowNull: false
      }
    },
    {
      tableName: "reservations"
    }
  );
};
