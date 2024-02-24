require('dotenv').config()
const { DataTypes } = require('sequelize')

const sequelize = require("../utils/database");

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    paranoid: true,
    deleteAt: "destroyTime"

})

module.exports = User;




