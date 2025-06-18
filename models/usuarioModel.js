const { DataTypes } = require('sequelize');
const { databaseMySQL } = require('../config/database');

const Usuario = databaseMySQL.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  apellido_paterno: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  apellido_materno: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  id_rol: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'roles', // Nombre de la tabla referenciada
      key: 'id' // Clave primaria de la tabla referenciada
    }
  }
}, {
  tableName: 'usuarios',
  timestamps: true
});

module.exports = { Usuario };