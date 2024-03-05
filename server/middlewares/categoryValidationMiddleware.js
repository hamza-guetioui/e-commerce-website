const { error } = require('../utils/responseFormat')

const isMatch = (value) => {
    if (typeof value !== 'string') return false;

    // Alphanumeric string pattern (e.g., "abc123" or "abc-123")
    const numericStringRegex = /^\d+$/;
    // UUID pattern (e.g., "4b2b7b6f-8e72-4cd2-a4a8-6929d8733299")
    const uuidRegex = /^[0-9a-fA-F]{8}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{12}$/

    return numericStringRegex.test(value) || uuidRegex.test(value)
}

const validateCategoryId = (req, res, next) => {
    const categoryId = req.params.id;
    if (!categoryId || !isMatch(categoryId)) {
        return res.status(400).json(error("Invalid category ID format"));
    }
    next();
};


const validateCategoryName = (req, res, next) => {
    const { categoryName } = req.body;
    if (!categoryName || typeof categoryName !== 'string') {
        return res.status(400).json(error("Invalid category name"));
    }
    next();
};

module.exports = {
    validateCategoryId,
    validateCategoryName,
};