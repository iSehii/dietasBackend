const { DataTypes } = require('sequelize');
const { databaseMySQL } = require('../config/database');

const Estados = databaseMySQL.define('Estados', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: DataTypes.STRING(50),
  descripcion: DataTypes.TEXT
}, {
  tableName: 'estados',
  timestamps: true
});

module.exports = { Estados };