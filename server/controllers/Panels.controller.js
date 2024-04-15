const Panel = require('../models/Panel.model');
const PanelTypes = require('../models/PanelTypes.model')
const { success, error } = require('../utils/responseFormat')


async function index(req, res) {
    const type = req.query.type
    const limit = Number.parseInt(req.query.limit)

    try {
        let panels = await Panel.findAll({
            attributes: ['id', 'title', 'description', 'image'],
            include: [
                {
                    model: PanelTypes,
                    attributes: ['id', 'name'],
                    where: { name: type },
                },
            ],
            order: [['createdAt', 'DESC']],
            limit: limit
        })
        panels = panels.map(panel => {
            const plainPanel = panel.toJSON(); // Convert Sequelize instance to plain object
            plainPanel.type = plainPanel.panelType;
            delete plainPanel.panelType;
            return plainPanel;
        });

        res.status(200).json(success("Retrieved Panels successfully", panels));

    } catch (err) {
        res.status(500).json(error(err.toString()))
    }
}

async function store(req, res) {
    const type = JSON.parse(req.body.type)

    const newPanel = {
        title: req.body.title,
        description: req.body.description,
        path: req.body.path,
        image: req.file ? req.file.filename : null,
        panelTypeId: type[0].id
    }

    try {
        await Panel.create(newPanel)

        res.status(200).json(success("Panel created successfully"));

    } catch (err) {
        res.status(500).json(error(err.message))
    }
}

async function update(req, res) {
    const type = JSON.parse(req.body.type)

    const updatePanel = {
        title: req.body.title,
        description: req.body.description,
        path: req.body.path,
        image: req.file ? req.file.filename : null,
        panelTypeId: type[0].id
    }

    try {
        await Panel.update(updatePanel)

        res.status(200).json(success("Category updated successfully", categoryUpdated));
    } catch (err) {
        //  Rollback the transaction if something went wrong
        await transaction.rollback()
        res.status(500).json(error(err.toString()))
    }
}

async function destroy(req, res) {
    const id = req.params.id

    try {
        const panel = await Panel.findByPk(id)
        if (!panel) {
            return res.status(404).json(error("Panel not found"));
        }
        await Panel.destroy()
        res.status(200).json(success("Pan deleted successfully"));
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

