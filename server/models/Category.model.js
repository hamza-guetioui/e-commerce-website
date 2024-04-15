const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Promotion = require('./Promotion.model');

const Category = sequelize.define("category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: {
            arg: true,
            msg: "Category name must be unique",
        },
        validate: {
            is: {
                args: /^[a-zA-Z]+[a-zA-Z\s]*$/,
                msg: "Category name allows only letters"
            },
            notEmpty: {
                msg: "Please enter a valid category name"
            },
        }
    },
}, {
    timestamps: false
});

// Association :

// Category, Category => Many-to-Many
const CategoryRelation = sequelize.define("categoryRelation", {
    parentCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id'
        }
    },
    childCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id'
        }
    },
}, {
    tableName: 'categories_relations',
    timestamps: false
});

Category.belongsToMany(Category, { through: CategoryRelation, foreignKey: 'parentCategoryId', as: 'ParentOf' });
Category.belongsToMany(Category, { through: CategoryRelation, foreignKey: 'childCategoryId', as: 'ChildOf' });

// Category, Promotion => Many-To-Many
const CategoryPromotion = sequelize.define("CategoryPromotion", {

}, {
    tableName: 'categories_promotions',
    timestamps: false
});

Category.belongsToMany(Promotion, { through: CategoryPromotion });
Promotion.belongsToMany(Category, { through: CategoryPromotion });


module.exports = { Category, CategoryRelation }
