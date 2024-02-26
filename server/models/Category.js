const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Category = sequelize.define("category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoryName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
}, {
    timestamps: false
});

const CategoriesRelation = sequelize.define("categoriesRelation", {
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
    timestamps: false
});

Category.belongsToMany(Category, { through: CategoriesRelation, foreignKey: 'parentCategoryId', as: 'Parent' });
Category.belongsToMany(Category, { through: CategoriesRelation, foreignKey: 'childCategoryId', as: 'Child' });



module.exports = { CategoriesRelation, Category }
