const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Product = require('./Product.model')
const Promostion = require('./Promotion.model')
const Color = require('./Color')
const Size = require('./Size.model')

const OrderItem = sequelize.define("OrderItem", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: { msg: "Quantity must be an integer" },
            min: { args: [1], msg: "Quantity must be greater than or equal to 1" }
        }
    },
    totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: { args: [0], msg: "Total Price must be greater than or equal to 0" }
        }
    }
}, {
    tableName: "orders_items",
    timestamps: false
});
// Association :

// OrderItem, Product  => One-to-Many
OrderItem.belongsTo(Product, { foreignKey: { allowNull: false } })
Product.hasMany(OrderItem, { foreignKey: { allowNull: false }, as: 'OrderItems' })


// OrderItem, Promostion  => One-to-Many
OrderItem.belongsTo(Promostion, { foreignKey: { allowNull: true } })
Promostion.hasMany(OrderItem, { foreignKey: { allowNull: true } })

// OrderItem; Color => One-to-Many
OrderItem.belongsTo(Color, { foreignKey: { allowNull: false } })
Color.hasMany(OrderItem, { foreignKey: { allowNull: false } })

// OrderItem ,Size  => One-to-Many
OrderItem.belongsTo(Size, { foreignKey: { allowNull: false } })
Size.hasMany(OrderItem, { foreignKey: { allowNull: false } })

module.exports = OrderItem