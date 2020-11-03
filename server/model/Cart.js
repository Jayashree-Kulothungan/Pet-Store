const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    dayCare : {
        DogWeekday : {type : Number},
        DogweekdayPrice : {type : Number},
        dateDogWeekday : {type : String} ,
        timeDogWeekday : {type : String} ,
        //
        DogWeekend : {type : Number },
        DogweekendPrice : {type : Number} , 
        dateDogWeeken : {type : String} ,
        timeDogWeekend : {type : String},
        //
        CatWeekday : {type : Number},
        CatweekdayPrice : {type : Number}, 
        dateCatWeekday : {type : String}, 
        timeCatWeekday : {type : String},
        //
        CatWeekend : {type : String},
        CatweekendPrice : {type : String},
        dateCatWeekend : {type : String},
        timeCatWeekend : {type : String},
        //
        Serviceid : {type : String} , 
        name : {type : String} ,
        address : {type : String},
        zipcde : {type : String} ,
        total : {type : Number},
    },
    user : {type: Schema.Types.ObjectId, ref: User}
})

module.exports = Cart = mongoose.model('Cart',CartSchema);
