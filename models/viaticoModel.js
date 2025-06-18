const { DataTypes } = require('sequelize');
const { databaseMySQL } = require('../config/database');

const Viatico = databaseMySQL.define('Viatico', {
  id_viatico: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  motivo: DataTypes.TEXT,
  total: DataTypes.DECIMAL(10, 2),
  id_status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'estados', // Nombre de la tabla referenciada
      key: 'id' // Clave primaria de la tabla referenciada
    }
  }
}, {
  tableName: 'viaticos',
  timestamps: true
});

module.exports = { Viatico };