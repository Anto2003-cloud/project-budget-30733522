const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DynamicText = sequelize.define('DynamicText', {
    section: {
        type: DataTypes.STRING,
        allowNull: false
    },
    key: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'dynamic_texts',
    timestamps: true
});

module.exports = DynamicText;