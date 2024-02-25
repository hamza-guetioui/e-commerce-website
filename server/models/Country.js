const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const Country = sequelize.define("Country", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Country;