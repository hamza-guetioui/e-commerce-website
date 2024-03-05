const { Category, CategoryRelation } = require('../models/Category');
const { Sequelize } = require('sequelize');
const sequelize = require('../utils/database')
const { success, error } = require('../utils/responseFormat')


// Retrieve all categories with their children
async function index(req, res) {
    try {
        const categories = await Category.findAll({
            attributes: ['id', 'categoryName'],
            include: [
                {
                    model: Category,
                    as: 'ParentOf',
                    through: {
                        model: CategoryRelation,
                        attributes: [],
                    },
                    attributes: ['id', 'categoryName'],
                    where: { '$ParentOf.id$': { [Sequelize.Op.ne]: null } }, // Filter out categories without children
                },
            ],
            order: [['id', 'ASC']],
        });

        // function to chnage key name from "ParentOf" to "children"
        const modifiedCategories = categories.map(category => {
            return {
                id: category.id,
                categoryName: category.categoryName,
                children: category.ParentOf
            };
        });

        res.status(200).json(success("Retrieved categories successfully", modifiedCategories));

    } catch (err) {
        res.status(500).json(error(err.toString()))
    }
}

// Create a new category with optional parent categories
async function store(req, res) {
    const { categoryName, parentCategoryIds } = req.body;

    //start transaction
    const transaction = await sequelize.transaction();

    try {
        const category = await Category.create({ categoryName }, { transaction });

        // Set parent-child relationships if specified
        if (isValidArrayInput(parentCategoryIds)) {

            const parentCategories = await Category.findAll({
                where: { id: parentCategoryIds },
                transaction
            });

            await Promise.all(parentCategories.map(async (parentCategory) => {
                await category.setChildOf(parentCategory, { transaction });
            }));
        }

        //  commit the transaction and send back the newly created category
        await transaction.commit();

        res.status(201).json(success("Category created successfully"));

    } catch (err) {
        // Rollback the transaction if something went wrong
        await transaction.rollback();
        res.status(500).json(error(err.toString()));
    }
}

// Update an existing category, optionally setting or clearing parent categories
async function update(req, res) {
    const categoryId = req.params.id;
    const { categoryName, parentCategoryIds } = req.body;
    //start transaction
    const transaction = await sequelize.transaction();

    try {
        const category = await Category.findByPk(categoryId);
        if (!category) {
            return res.status(404).json(error("Category not found"));
        }
        const categoryUpdated = await category.update({ categoryName }, { transaction })

        if (isValidArrayInput(parentCategoryIds)) {

            // Clear existing relationships
            await category.setChildOf(null);

            //  Add new parents to this category
            const parentCategories = await Category.findAll({
                where: { id: parentCategoryIds },
                transaction
            });
            await Promise.all(parentCategories.map(async (parentCategory) => {
                await category.setChildOf(parentCategory, { transaction });
            }));
        }

        //  Commit the transaction and send back the updated category
        await transaction.commit()

        res.status(200).json(success("Category updated successfully", categoryUpdated));
    } catch (err) {
        //  Rollback the transaction if something went wrong
        await transaction.rollback()
        res.status(500).json(error(err.toString()))
    }
}

// Delete a category
async function destroy(req, res) {
    const categoryId = req.params.id;

    try {
        const category = await Category.findByPk(categoryId, {
            include: [
                {
                    model: Category,
                    as: 'ParentOf',
                    through: {
                        model: CategoryRelation,
                        attributes: [],
                    },
                }]
        })
        if (!category) {
            return res.status(404).json(error("Category not found"));
        }

        // Check for any associated products before deleting the category
        const associated = category.ParentOf;
        if (isValidArrayInput(associated)) {
            const associatedProducts = associated.map(({ dataValues }) => dataValues.categoryName).join(', ');
            return res.status(409).json(error(`This category is still associated with ${associatedProducts} product(s)`))
        }

        // If there are no associated products, proceed with deletion
        await category.destroy();
        res.status(200).json(success("Category deleted successfully"));
    } catch (err) {
        res.status(500).json(error(err.toString()))
    }
}


module.exports = {
    index,
    store,
    update,
    destroy
}

const isValidArrayInput = (inputArray) => {
    return inputArray && Array.isArray(inputArray) && inputArray.length > 0;
}