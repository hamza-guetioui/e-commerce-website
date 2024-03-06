const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Customer = require('./Customer')
const Product = require('./Product')

const Wishlist = sequelize.define("wishlist", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
},{
    timestamps :false,
})

// Association :

// Wishlist, Customer => One-to-One
Wishlist.belongsTo(Customer, { foreignKey: {allowNull: false }, onDelete: "CASCADE" });
Customer.hasOne(Wishlist)

// WishList, Product => Many-to-Many
const WishlistItem = sequelize.define("WishListItem", {

}, {
    tableName: "Wishlists_items",
    timestamps: false ,
})

Wishlist.belongsToMany(Product, { through: WishlistItem })
Product.belongsToMany(Wishlist, { through: WishlistItem })

module.exports = Wishlist