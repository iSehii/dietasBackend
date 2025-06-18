const { DataTypes } = require('sequelize');
const { databaseMySQL } = require('../config/database');

const GastoViaje = databaseMySQL.define('GastoViaje', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: DataTypes.TEXT,
  monto: DataTypes.DECIMAL(10, 2),
  id_viatico: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'viaticos', // Nombre de la tabla referenciada
      key: 'id' // Clave primaria de la tabla referenciada
    }
  },
  id_tipo_gasto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'tipo_gastos', // Nombre de la tabla referenciada
      key: 'id' // Clave primaria de la tabla referenciada
    }
  }
}, {
  tableName: 'gastos_viajes',
  timestamps: false
});

module.exports = { GastoViaje };