const { Category, CategoryRelation } = require('../models/Category');
const { Sequelize } = require('sequelize');
const sequelize = require('../utils/database')



async function index(req, res) {
    try {
        // const categories = await Category.findAll();
        const categories = await Category.findAll({
            attributes: ['id', 'categoryName'],
            include: [
                {
                    model: Category,
                    as: 'Parent',
                    through: {
                        model: CategoryRelation,
                        attributes: [],
                    },
                    attributes: ['id', 'categoryName'],
                    where: { '$Parent.id$': { [Sequelize.Op.ne]: null } }, // Filter out categories without children
                },
            ],
            order: [['id', 'ASC']],
        });

        // function to chnage key name from "Parent" to "children"
        const modifiedCategories = categories.map(category => {
            return {
                id: category.id,
                categoryName: category.categoryName,
                children: category.Parent
            };
        });

        res.status(200).json({
            status: "success",
            message: "Retrieved categories successfully",
            data: modifiedCategories
        });

    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.toString(),
            data: null
        })
    }
}

async function store(req, res) {

    const { categoryName, parentCategoryIds } = req.body
    if (!categoryName || typeof categoryName !== 'string') {
        return res.status(400).json({
            status: "error",
            message: "invalidate category name",
            data: null
        });
    }
    // start transiction
    const transaction = await sequelize.transaction();

    try {
        const category = await Category.create({ categoryName }, { transaction });

        if (parentCategoryIds && parentCategoryIds.length > 0) {
            const parentCategories = await Category.findAll({
                where: { id: parentCategoryIds },
                transaction
            });

            await Promise.all(parentCategories.map(async (parentCategory) => {
                try {
                    await category.setChild(parentCategory, { transaction });
                } catch (err) {
                    throw err;
                }
            }));
        }

        // Commit the transaction if everything  successful
        await transaction.commit();

        res.status(201).json({
            status: "success",
            message: "Category created successfully",
            data: {
                category: {
                    id: category.id,
                    name: category.name,
                }
            }
        });

    } catch (err) {
        await transaction.rollback();

        res.status(500).json({
            status: "error",
            message: err.toString(),
            data: null
        })
    }
}

async function update(req, res) {
    const categoryId = req.params.id
    try {
        const category = await Category.findByPk(categoryId);
        if (!category) {

            return res.status(404).json({
                status: "error",
                message: "Category not found"
            });
        }
        await category.update({

        })
        res.status(200).json({
            status: "success",
            message: "Category updated successfully",
            data: {
                category: {
                    id: category.id,
                    name: category.name,
                }
            }
        });

    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.toString(),
            data: null
        })
    }
}

async function destroy(req, res) {
    const categoryId = req.params.id;
    if (!categoryId || typeof categoryId !== 'string') {
         res.status(400).json({ message: 'Invalid category ID format' });
    }
    try {
        const category = await Category.findByPk(categoryId);
        if (!category) {
            return res.status(404).json({
                status: "error",
                message: "Category not found"
            });
        }
        await category.destroy();
     res.status(200).json({
            status: "success",
            message: "Category deleted successfully",
            data: { categoryId }
        });
    } catch (err) {
         res.status(500).json({
            status: "error",
            message: err.toString(),
            data: null
        })
    }
}



module.exports = {
    index,
    store,
    update,
    destroy
}