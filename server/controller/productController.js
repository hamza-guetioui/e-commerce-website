

const getCategories = async (req, res) => {
    try {
        const sqlResult = await req.db.query(`
        SELECT 
            c.category_name as parent_category, 
            GROUP_CONCAT(CONCAT(cc.id, '-', cc.category_name) SEPARATOR ',') as child_categories 
        FROM 
            category c 
            JOIN category_relation cr ON c.id = cr.fk_parent_category_id 
            JOIN category cc ON cr.fk_child_category_id = cc.id 
        GROUP BY 
            cr.fk_parent_category_id
    `);

        // Assuming the result is an array of rows, if not, adjust accordingly
        const categories = sqlResult[0].map(item => {
            const parentCategory = item.parent_category;
            const childCategories = item.child_categories.split(',').map(child => {
                const [id, name] = child.split('-');
                return { id: parseInt(id), name };
            });

            return { parent_category: parentCategory, child_categories: childCategories };
        });
        res.json(categories);

    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }

};
const getProducts = async (req,res) =>{
    
}

module.exports = {
    getCategories,
}