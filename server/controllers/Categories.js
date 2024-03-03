const Category = require('../models/Category');


async function index(req, res) {
    try {
        const categories = await Category.findAll();
        res.status(200).json({ categories });

    } catch (err) {
        res.status(500).json({ message: err.toString() })
    }
}

async function store(req, res) {
    try {
        const category = await Category.create({

        });
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
        res.status(500).json({ message: err.toString() })
    }
}
async function update(req, res) {
    const categoryId = req.params.id
    try {
        const category = await Category.findByPk(categoryId);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
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
        res.status(500).json({ message: err.toString() })
    }
}
async function destroy(req, res) {
    const categoryId = req.params.id
    try {
        const category = await Category.findByPk(categoryId);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        await category.destroy();
        res.status(204).json({
            status: "success",
            message: "Category deleted successfully",
            data: { categoryId }
        });
    } catch (err) {
        res.status(500).json({ message: err.toString() })
    }
}
module.exports = {
    index,
    store,
    update,
    destroy
}