const _ = require('lodash');
const express = require('express');
const router = express.Router();

const {CarPlate, validate} = require('../models/carPlate');

router.get('/', async(req, res) => {
    const carPlates = await CarPlate.find().select('-').sort('number');
    res.send(carPlates);
});
router.post('/', async(req, res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    try {
        console.log('as cia');
        var plateNumber = req.body.number;
        var ownerName = req.body.owner;
        let plate = await CarPlate.findOne({number: plateNumber});
        if(plate){
            return res.status(400).send('Car plate with this number already exists');
        } 
        let carPlate = new CarPlate(_.pick(req.body, ['number', 'owner']));
        await carPlate.save();
        res.send('Car plate was succesfully inserted in database!');
    } catch (ex) {
        console.log( `exeption caught in car plate post route ${ex}`);
    }
});
router.delete('/:id', async(req, res) => {
    console.log('params -> ', req.params);
    let id = req.params.id;
    console.log(`Car plate delete route: ID -> ${id} and req -> ${req}`);
    if(id){
        await CarPlate.findByIdAndDelete(id).then((result, err) => {
            if(!err) {
                console.log('Car plate was deleted successfully!');
                res.json({ message: 'Deleted' });
            } else {
                console.log(`Delete car plate error -> ${err}`);
                res.send(err);
            } 
        })
    }
});
router.put('/:id', async(req, res) => {
    var {number, owner} = req.body;
    const oldPlate = await CarPlate.findById(req.params.id);
    if(!owner) {
        owner = oldPlate.owner;
    } else if (!number){
        number = oldPlate.number;
    }
    newPlate = {'number': number, 'owner': owner}
    await CarPlate.findByIdAndUpdate(req.params.id, newPlate);
    res.send(newPlate);
})

module.exports = router;