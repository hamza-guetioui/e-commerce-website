const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Size = sequelize.define("size", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sizeName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    }
},{
    timestamps:false
})


module.exports = Size