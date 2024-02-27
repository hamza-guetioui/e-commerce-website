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
            notNull: { msg: 'Title is required.' },
            notEmpty: { msg: 'Title cannot be empty.' },
        },
    },
    dscription: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dicountRate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: 'Discount rate is required.' },
            isInt: { msg: 'Discount rate must be an integer.' },
            min: { args: [0], msg: 'Discount rate cannot be negative.' },
            max: { args: [100], msg: 'Discount rate cannot be greater than 100.' },
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
            notNull: { msg: 'Start date is required.' },
            isDate: { msg: 'Start date must be a valid date.' },
        },
    },
    endAt: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: { msg: 'End date is required.' },
            isDate: { msg: 'End date must be a valid date.' },
            isEndDateValid(value) {
                if (new Date(value) <= new Date(this.startAt)) {
                    throw new Error('End date must be greater than start date.');
                }
            },
        },
    }
}, {
    timestamps: true

})

module.exports = Promostion