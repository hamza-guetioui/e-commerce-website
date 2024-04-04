const { DataTypes } = require("sequelize");
const sequelize = require('../utils/database')

const Panel = sequelize.define('Panel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            is: {
                args: /^[a-zA-Z]+[a-zA-Z0-9\s]*$/,
                msg: "Panel title must contain only letters, numbers, and spaces."
            },
            isEmpty: {
                args: false,
                msg: "Panel title cannot be empty."
            }
        }
    },
    description: {
        type: DataTypes.STRING(100),
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
            notEmpty: {
                args: true,
                msg: "Panel image cannot be empty."
            }
        }
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['slider', 'Advertisement', 'Discovery']]
        }

    }

}, {
    timestamps: true,
    paranoid: true
});

module.exports = Panel