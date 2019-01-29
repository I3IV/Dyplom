// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get("sequelizeClient");
  const itemStatus = sequelizeClient.define(
    "item_status",
    {
      id: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        primaryKey: true,
        field: "ItemStatus_id"
      },
      ItemStatusName: {
        type: DataTypes.STRING(20),
        allowNull: false
      }
    },
    {
      tableName: "itemstatus",
      beforeCount(options) {
        options.raw = true;
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  itemStatus.associate = function(models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return itemStatus;
};
