const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Product = require('./Product');
const { Category } = require('./Category')
const Color = require('./Color');
const Size = require('./Size.model');
const Image = require('./Image')

const ProductItem = sequelize.define("productItem", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isFloat: {
                args: true,
                msg: "Price must be a valid floating-point number."
            },
            min: {
                args: [0],
                msg: "Price cannot be negative."
            }
        }
    },
    quantityInStore: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: {
                args: true,
                msg: "Quantity must be an integer."
            },
            min: {
                args: [0],
                msg: "Quantity cannot be negative."
            }
        }
    }
}, {
    timestamps: false,
    tableName: "products_items",
})

// Association :

// Product, ProductItem => One-To-One
Product.hasOne(ProductItem, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
ProductItem.belongsTo(Product, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })

// ProductItem, Category => Many-to-Many
const ProductsCategory = sequelize.define("productsCategory", {
    isParent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'isParent',
    },
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
ProductItem.hasMany(Image, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
Image.belongsTo(ProductItem, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })


module.exports = ProductItem