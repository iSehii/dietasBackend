const { DataTypes } = require('sequelize');
const { databaseMySQL } = require('../config/database');

const Rol = databaseMySQL.define('Rol', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,   
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'roles',
  timestamps: true
});

module.exports = { Rol };