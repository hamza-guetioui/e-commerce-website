const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Customer = require('./Customer')
const Address = require('./Address')
const PaymentMethod = require('./PaymentMethod.model')

const OrderItem = require('./OrderItem.model')

const Order = sequelize.define("order", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: true,
            min: 0, // Assuming total price should be non-negative
        },
    },
    orderState: {
        type: DataTypes.STRING, 
        allowNull: true,
        validate: {
            isIn: [['Pending', 'Processing', 'Shipped', 'Delivered']], // Only allow specific values
        },
    },
}, {
    tableName: 'customers_orders',
    timestamps: true,
    updatedAt: false,
})

// Association :

// Order, OrderItem => One-to-Many
Order.hasMany(OrderItem, { foreignKey: { allowNull: false } });
OrderItem.belongsTo(Order, { foreignKey: { allowNull: false } });

// Order, Customer => One-To-Many
Order.belongsTo(Customer, { foreignKey: { allowNull: false } });
Customer.hasMany(Order, { foreignKey: { allowNull: false } });

// Order, Address => One-To-Many
Order.belongsTo(Address, { foreignKey: { allowNull: false } });
Address.hasMany(Order, { foreignKey: { allowNull: false } });

// Order, PaymentMethod => One-To-Many
Order.belongsTo(PaymentMethod, { foreignKey: { allowNull: false } });
PaymentMethod.hasMany(Order, { foreignKey: { allowNull: false } });




module.exports = Order