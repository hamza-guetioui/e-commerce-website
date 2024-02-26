const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Color = sequelize.define("color", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    colorName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
}, {
    timestamps: false
})

module.exports = Color;