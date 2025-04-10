const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Contact = sequelize.define('Contact', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    mensaje: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'contacts',
    timestamps: true
});

module.exports = Contact;