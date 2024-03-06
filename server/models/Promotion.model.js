const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')


const Promostion = sequelize.define('promostion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Promostion title is required.' },
            notEmpty: { msg: 'Promostion title cannot be empty.' },
        },
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Promostion description is required.' },
            notEmpty: { msg: 'Promostion description cannot be empty.' },
        },
    },
    discountRate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: 'Promostion discount rate is required.' },
            isInt: { msg: 'Promostion discount rate must be an integer.' },
            min: { args: [0], msg: 'Promostion discount rate cannot be negative.' },
            max: { args: [100], msg: 'Promostion discount rate cannot be greater than 100.' },
        },
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    startAt: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: { msg: 'Promostion start date is required.' },
            isDate: { msg: 'Promostion start date must be a valid date.' },
        },
    },
    endAt: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: { msg: 'Promostion end date is required.' },
            isDate: { msg: 'Promostion end date must be a valid date.' },
            isEndDateValid(value) {
                if (new Date(value) <= new Date(this.startAt)) {
                    throw new Error('Promostion end date must be greater than start date.');
                }
            },
        },
    }
}, {
    timestamps: true

})

module.exports = Promostion