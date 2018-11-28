/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tablesinorder', {
    Orders_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'orders',
        key: 'Order_id'
      }
    },
    Table_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tables',
        key: 'Table_id'
      }
    }
  }, {
    tableName: 'tablesinorder'
  });
};
