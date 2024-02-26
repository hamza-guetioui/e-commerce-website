const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Image = sequelize.define("image", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    imageSrc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false
})

module.exports = Image;