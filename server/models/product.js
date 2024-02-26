const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const ProductItem = require('./ProductItem')

const Product = sequelize.define("product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validator: {
            isEmpty: false
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps:  true,
})

// Association : Product, ProductItem => One-To-One
Product.hasOne(ProductItem, {
    foreignKey: {
        allowNull: false
    }
})
ProductItem.belongsTo(Product)

module.exports = Product