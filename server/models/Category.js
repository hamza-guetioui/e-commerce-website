const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const Category = sequelize.define("category", {
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

module.exports = Category;