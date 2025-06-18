const { DataTypes } = require('sequelize');
const { databaseMySQL } = require('../config/database');

const Solicitud = databaseMySQL.define('Solicitud', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fechaSolicitud: DataTypes.DATE,
  fechaInicio: DataTypes.DATE,
  fechaFin: DataTypes.DATE,
  actividad: DataTypes.TEXT,
  origen: DataTypes.STRING(100),
  destino: DataTypes.STRING(100),
  createdBy: {
    type: DataTypes.INTEGER,
    references: {
      model: 'usuarios', // Nombre de la tabla referenciada
      key: 'id' // Clave primaria de la tabla referenciada
}},
  idProyecto: {
    type: DataTypes.INTEGER,
    references: {
      model: 'proyectos', // Nombre de la tabla referenciada
      key: 'id' // Clave primaria de la tabla referenciada
}},
  id_viatico: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'viaticos', // Nombre de la tabla referenciada
      key: 'id' // Clave primaria de la tabla referenciada
    }
  }
}, {
  tableName: 'solicitudes',
  timestamps: true
});

module.exports = { Solicitud };