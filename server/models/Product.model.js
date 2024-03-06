const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')


const Product = sequelize.define("product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            arg: true,
            msg: 'The product name is already exist !'
        },
        validate: {
            is: {
                args: /^[a-zA-Z]+[a-zA-Z0-9\s]*$/,
                msg: "Product name must contain only letters, numbers, and spaces."
            },
            isEmpty: {
                args: false,
                msg: "Product name cannot be empty."
            }
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: { msg: 'Product description is required.' },
            notEmpty: { msg: 'Product description cannot be empty.' },
        },
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Product description cannot be empty."
            }
        }
    }
}, {
    timestamps: true,
    paranoid: true
})


module.exports = Product