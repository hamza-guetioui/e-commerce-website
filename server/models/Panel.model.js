const { DataTypes } = require("sequelize");
const sequelize = require('../utils/database')
const PanelTypes = require('./PanelTypes.model')

const Panel = sequelize.define('Panel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            is: {
                args: /^[a-zA-Z]+[a-zA-Z0-9\s]*$/,
                msg: "Panel title must contain only letters, numbers, and spaces."
            },
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Panel description is required.' },
            notEmpty: { msg: 'Panel description cannot be empty.' },
        },
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Panel path is required.' },
            notEmpty: { msg: 'Panel path cannot be empty.' },
        },
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Panel image is required.' },
            notEmpty: { msg: 'Panel image cannot be empty.' },
        },
    },
    panelTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    paranoid: true
});


// PanelTypes, Panel => Many-to-One
PanelTypes.hasMany(Panel, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
Panel.belongsTo(PanelTypes, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' })

module.exports = Panel