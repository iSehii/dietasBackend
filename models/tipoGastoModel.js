const { DataTypes } = require('sequelize');
const { databaseMySQL } = require('../config/database');

const TipoGasto = databaseMySQL.define('TipoGasto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'tipo_gastos',
  timestamps: false
});

module.exports = { TipoGasto };