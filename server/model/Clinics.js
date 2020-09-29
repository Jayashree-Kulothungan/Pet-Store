const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const ClinicsSchema = new Schema({
    zipcode : {type : String},
    name : {type : String},
    email : {type : String},
    website : {type : String},
    phone: [{type : String}],
    location : {
        building : {type : String},
        street : {type : String},
        area : {type : String},
        city : {type : String},
        state : {type : String}
    },
    productImage : [{type : String}],  // change type to binary
    user : {type: Schema.Types.ObjectId, ref: User}
})

//include google map link to location in the website

module.exports = Clinics = mongoose.model('Clinics',ClinicsSchema);
