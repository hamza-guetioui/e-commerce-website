const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Customer = require('./Customer')
const City = require('./City')

const Address = sequelize.define('address', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    addressLine1: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            is: {
                args: /^[a-zA-Z0-9\s\.,#-]+$/,
                msg: "Invalid characters in Address Line 1. Only letters, numbers, spaces, and specific symbols are allowed."
            }
        }
    },
    addressLine2: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            is: {
                args: /^[a-zA-Z0-9\s\.,#-]+$/,
                msg: "Invalid characters in Address Line 2. Only letters, numbers, spaces, and specific symbols are allowed."
            }
        }
    },
    postalCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: {
                args: true,
                msg: "Postal code must be an integer."
            },
            len: {
                args: [5, 7],
                msg: "Postal code must be between 5 and 7 characters long."
            }
        }
    }
}, {
    timestamps: false
});

// Association : 

// Address, City => One-to-Many
Address.belongsTo(City, { foreignKey: { allowNull: false }, onDelete: "CASCADE" })
City.hasMany(Address, { foreignKey: { allowNull: false }, onDelete: "CASCADE" })

//  Customer, Address => Many-To-Many
const CustomerAddress = sequelize.define("customerAddress", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Customer,
            key: "id"
        }
    },
    addressId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Address,
            key: 'id'
        }
    },
    isDefault: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

}, {
    tableName: "customers_addresses",
    timestamps: false
})
Customer.belongsToMany(Address, { through: CustomerAddress });
Address.belongsToMany(Customer, { through: CustomerAddress });

module.exports = Address