/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menu', {
    Menu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MenuName: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: 'Menu'
    },
    Restaurant_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'restaurants',
        key: 'Restaurant_id'
      }
    },
    StartMenuDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    EndMenuDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'menu'
  });
};
