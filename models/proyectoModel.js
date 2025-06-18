const { DataTypes } = require('sequelize');
const { databaseMySQL } = require('../config/database');

const Proyecto = databaseMySQL.define('Proyecto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  num_proyecto: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios', // Nombre de la tabla referenciada
      key: 'id' // Clave primaria de la tabla referenciada
    }
  },
}, {
  tableName: 'proyectos',
  timestamps: true
});

module.exports = { Proyecto };