const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comment = sequelize.define('Comment', {
    usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    calificacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'comments',
    timestamps: true
});

module.exports = Comment;