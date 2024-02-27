const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Customer = require('./Customer')

const PaymentMethod = sequelize.define("paymentMethod", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cardholderName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: /^[A-Za-z]+(?: [A-Za-z]+)?$/,
                msg: "Cardholder name can contain only allow letters "
            },
            isEmpty: {
                args: false,
                msg: "Cardholder name cannot be empty"
            }
        }
    },
    cardNumber: {
        type: DataTypes.STRING(16),
        allowNull: false,
        unique: {
            args: true,
            msg: "Card number must be unique."
        },
        validate: {
            is: {
                args: /^[0-9]{15,16}$/,
                msg: "Invalid card number. It should be a 15 or 16-digit number."
            },
            len: {
                args: [15, 16],
                msg: "Card number must be 15 or 16 digits long."
            }
        }

    },
    expirationDate: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
                msg: "Expiration date format should be MM/YY"
            },
            isExpired: async function (value) {
                const [month, year] = value.split('/');
                const currentDate = new Date();
                const cardExpirationDate = new Date(`20${year}`, month - 1);

                if (cardExpirationDate < currentDate) {
                    throw new Error('the card has already expired !');
                }
                return;
            },
        },

    },
    ccv: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: /^[0-9]{3,4}$/,
                msg: "CCV code should contain only numbers"
            }

        },
    },
}, {
    tableName: "payment_methods"
})

// Association : 
//  Customer, PaymentMethod => One-To-Many
Customer.hasMany(PaymentMethod, { foreignKey: { allowNull: false }, onDelete: "CASCADE" })
PaymentMethod.belongsTo(Customer)


module.exports = PaymentMethod