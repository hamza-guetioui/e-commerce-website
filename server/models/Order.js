const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Customer = require('./Customer')
const Address = require('./Address')
const PaymentMethod = require('./PaymentMethod')

const OrderItem = require('./OrderItem')

const Order = sequelize.define("order", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    TotalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: true,
            min: 0, // Assuming total price should be non-negative
        },
    }, 
    OrderState: {
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
Order.hasMany(OrderItem, { foreignKey: { allowNull: false }, as: 'OrderItems' });
OrderItem.belongsTo(Order);

// Order, Customer => One-To-Many
Order.belongsTo(Customer, { foreignKey: { allowNull: false }, as: 'CustomerOrder' });
Customer.hasMany(Order);

// Order, Address => One-To-Many
Order.belongsTo(Address, { foreignKey: { allowNull: false }, as: 'OrderAddress' });
Address.hasMany(Order);

// Order, PaymentMethod => One-To-Many
Order.belongsTo(PaymentMethod, { foreignKey: { allowNull: false }, as: 'OrderPaymentMethod' });
PaymentMethod.hasMany(Order);




module.exports = Order