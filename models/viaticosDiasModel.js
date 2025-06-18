const { DataTypes } = require('sequelize');
const { databaseMySQL } = require('../config/database');

const ViaticosDias = databaseMySQL.define('ViaticosDias', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dia_semana: DataTypes.STRING(20),
  monto_asignado: DataTypes.DECIMAL(10, 2),
  id_viatico: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'viaticos', // Nombre de la tabla referenciada
      key: 'id' // Clave primaria de la tabla referenciada
    }
  }
}, {
  tableName: 'viaticos_dias',
  timestamps: true
});

module.exports = { ViaticosDias };