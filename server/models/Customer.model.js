const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Customer = sequelize.define("customer", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: /^[a-zA-Z]+[a-zA-Z\s]*$/,
                msg: "First name must contain only letters and spaces."
            },
            isEmpty: {
                args: false,
                msg: "First name cannot be empty."
            }
        }
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: /^[a-zA-Z]+[a-zA-Z\s]*$/,
                msg: "Last name must contain only letters and spaces."
            },
            isEmpty: {
                args: false,
                msg: "Last name cannot be empty."
            }
        }
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            is: {
                args: /^[a-zA-Z]+[a-zA-Z0-9\s]*$/,
                msg: "Username must contain only letters, numbers, and spaces."
            },
            isEmpty: {
                args: false,
                msg: "Username cannot be empty."
            }
        }
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                args: true,
                msg: "Invalid email address."
            }
        }
    },

    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                msg: "Invalid phone number."
            }
        }
    },
}, {
    timestamps: true,
    paranoid: true,
});



module.exports = Customer