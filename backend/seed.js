const config = require('config');
const mongoose = require('mongoose');
const {CarPlate} = require('./models/carPlate');

const data = 
[
    {number: 'XMN:657', owner: 'Mykolas Jaunatis'},
    {number: 'KLN:157', owner: 'Mykolas Pilnatis'},
    {number: 'AMB:000', owner: 'Mykolas Delcia'},
    {number: 'LOS:111', owner: 'Mykolas Priespilnis'},
    {number: 'PAS:471', owner: 'Mykolas Kauans'},
    {number: 'XLN:685', owner: 'Mykolas Vilnius'},
    {number: 'ASD:148', owner: 'Mykolas Klaipeda'},
    {number: 'QWE:159', owner: 'Mykolas Sauliai'},
    {number: 'ZXC:021', owner: 'Mykolas Pasvalys'},
    {number: 'OPS:982', owner: 'Mykolas Rokiskis'},
    {number: 'KJC:125', owner: 'Mykolas Majemis'},
    {number: 'KON:230', owner: 'Adolfas Vilkaviskis'},
    {number: 'KOE:754', owner: 'Adolfas Jurbarkas'},
    {number: 'LOP:431', owner: 'Adolfas Kupiskis'},
    {number: 'POQ:145', owner: 'Adolfas Palanga'},
    {number: 'OLS:847', owner: 'Adolfas Birzai'},
    {number: 'OOS:127', owner: 'Adolfas Plunge'},
    {number: 'GGP:357', owner: 'Adolfas Ignalina'},
    {number: 'SSA:877', owner: 'Adolfas Utena'},
    {number: 'KLO:117', owner: 'Adolfas Panevezys'}
];

async function seed(){
    await mongoose.set('useCreateIndex', true);
    await mongoose.connect(
        config.get('db'),
        {useNewUrlParser: true, useUnifiedTopology: true}, 
        () => {
            console.log('Successfully connected to databse');
        }
    );
    await CarPlate.deleteMany({});
    await CarPlate.insertMany(data);

    mongoose.disconnect();

    console.log('Done!');
}

seed();
