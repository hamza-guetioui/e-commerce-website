const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const { Category } = require('./Category');
const Color = require('./Color');
const Size = require('./Size');
const Image = require('./Image')

const ProductItem = sequelize.define("productItem", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    qtyInStore: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: "products_items",
})

// Association :

// ProductItem, Category => Many-to-Many
ProductItem.belongsToMany(Category, { through: "productsCategories" });
Category.belongsToMany(ProductItem, { through: "productsCategories" });

// ProductItem, Color => Many-to-Many
ProductItem.belongsToMany(Color, { through: "productsColors" });
Color.belongsToMany(ProductItem, { through: "productsColors" });

// ProductItem, Size => Many-to-Many
ProductItem.belongsToMany(Size, { through: "productsSizes" });
Size.belongsToMany(ProductItem, { through: "productsSizes" });

// ProductItem, Image => Many-to-One
ProductItem.hasMany(Image)
Image.belongsTo(ProductItem)

module.exports = ProductItem