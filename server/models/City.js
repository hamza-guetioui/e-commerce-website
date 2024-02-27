const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const City = sequelize.define("city", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cityName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            is: {
                args: /^[a-zA-Z]+[a-zA-Z\s]*$/,
                msg: "City name can only contain letters."
            },
            isEmpty: {
                args: false,
                msg: "City name cannot be empty"
            }
        }
    }
}, {
    timestamps: false
})

// City.sync({force:true}).then(()=>{
//    City.blukCreate([
//     { cityName: 'Casablanca' },
//     { cityName: 'Rabat' },
//     { cityName: 'Marrakech' },
//     { cityName: 'Fes' },
//     { cityName: 'Tangier' },
//     { cityName: 'Agadir' },
//     { cityName: 'Meknes' },
//     { cityName: 'Oujda' },
//     { cityName: 'Kenitra' },
//     { cityName: 'Tetouan' },
//     { cityName: 'Beni Mellal' },
//     { cityName: 'Nador' },
//     { cityName: 'Essaouira' },
//     { cityName: 'El Jadida' },
//     { cityName: 'Dakhla' } ,
//     { cityName: 'Tafraoute' }])
// })


module.exports = City