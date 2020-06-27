const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plateSchema = new Schema({
    number: {
        type: String,
        required: true,
        minlength: 6
    }, 
    owner: {
        type: String,
        required: true,
        minlength: 2
    }
});

const CarPlate = mongoose.model('CarPlate', plateSchema);
function validatePlate(carPlate){
    const schema = {
        number: Joi.string().required().min(6),
        owner: Joi.string().required().min(2)
    };
    return Joi.validate(carPlate, schema);
}

exports.CarPlate = CarPlate;
exports.validate = validatePlate;