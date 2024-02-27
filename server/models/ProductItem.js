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
const ProductsCategory = sequelize.define("productsCategory", {

}, {
    tableName: "products_categories",
    timestamps: false
})
ProductItem.belongsToMany(Category, { through: ProductsCategory });
Category.belongsToMany(ProductItem, { through: ProductsCategory });

// ProductItem, Color => Many-to-Many
const ProductsColor = sequelize.define("productsColor", {

}, {
    tableName: "products_colors",
    timestamps: false
})
ProductItem.belongsToMany(Color, { through: ProductsColor });
Color.belongsToMany(ProductItem, { through: ProductsColor });

// ProductItem, Size => Many-to-Many
const ProductsSize = sequelize.define("productsSize", {

}, {
    tableName: "products_sizes",
    timestamps: false
})
ProductItem.belongsToMany(Size, { through: ProductsSize });
Size.belongsToMany(ProductItem, { through: ProductsSize });

// ProductItem, Image => Many-to-One
ProductItem.hasMany(Image)
Image.belongsTo(ProductItem)

module.exports = ProductItem