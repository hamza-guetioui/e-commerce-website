const Panel  = require('../models/Panel.model');
const sequelize = require('../utils/database')
const { success, error } = require('../utils/responseFormat')


async function index(req, res) {
    try {
        res.status(200).json(success("Retrieved categories successfully"));

    } catch (err) {
        res.status(500).json(error(err.toString()))
    }
}

async function store(req, res) {
    //start transaction
    const transaction = await sequelize.transaction();

    try {
        
        await transaction.commit();

        res.status(201).json(success("Category created successfully"));

    } catch (err) {
        // Rollback the transaction if something went wrong
        await transaction.rollback();
        res.status(500).json(error(err.toString()));
    }
}

async function update(req, res) {
    const transaction = await sequelize.transaction();

    try {
       
        await transaction.commit()

        res.status(200).json(success("Category updated successfully", categoryUpdated));
    } catch (err) {
        //  Rollback the transaction if something went wrong
        await transaction.rollback()
        res.status(500).json(error(err.toString()))
    }
}

async function destroy(req, res) {

    try {
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

