const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Customer = require('./Customer')
const Product = require('./Product')

const ShoppingCard = sequelize.define("shoppingCard", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
}, {
    tableName: "shopping_cards",
    timestamps: false,
})

// Association :

// ShoppingCard, Customer => One-to-One
ShoppingCard.belongsTo(Customer, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });
Customer.hasOne(ShoppingCard)

// ShoppingCard, Product => Many-to-Many
const ShoppingCardItem = sequelize.define("shoppingCardItem", {
    shoppingCardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ShoppingCard,
            key: 'id'
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            isInt: { msg: 'Quantity must be an integer.', },
            min: {
                args: [1],
                msg: 'Quantity must be at least 1.',
            },
        }
    }
}, {
    tableName: "shopping_cards_items",
    timestamps: false,
})

ShoppingCard.belongsToMany(Product, { through: ShoppingCardItem })
Product.belongsToMany(ShoppingCard, { through: ShoppingCardItem })

module.exports = ShoppingCard