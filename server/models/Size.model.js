const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Size = sequelize.define("size", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            is: {
                args: /^[a-zA-Z]+$/,
                msg: "Size name can only contain letters."
            },
            isEmpty: {
                args: false,
                msg: "Size name cannot be empty"
            }
        }
    }
},{
    timestamps:false
})


module.exports = Size