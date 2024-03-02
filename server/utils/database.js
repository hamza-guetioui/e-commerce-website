require('dotenv').config()

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    process.env.DB_NAME, // Database name
    process.env.DB_USER, // Username
    process.env.DB_PASSWORD, // Password
    {
        host: process.env.DB_HOST, // Database  host
        dialect: 'mysql' // Type of database 
    },
);
module.exports = sequelize; 