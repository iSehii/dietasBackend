const { DataTypes } = require('sequelize');
const { databaseMySQL } = require('../config/database');

const Roles = databaseMySQL.define('Roles', {
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

module.exports = { Roles };