const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Size = sequelize.define("size", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    size_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    }
},{
    timestamp:false
})


module.exports = Size