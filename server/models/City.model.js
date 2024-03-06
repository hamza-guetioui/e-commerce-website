const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const City = sequelize.define("city", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cityName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            is: {
                args: /^[a-zA-Z]+[a-zA-Z\s]*$/,
                msg: "City name can only contain letters."
            },
            isEmpty: {
                args: false,
                msg: "City name cannot be empty"
            }
        }
    }
}, {
    timestamps: false
})



module.exports = City