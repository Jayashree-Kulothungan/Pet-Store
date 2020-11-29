const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    dayCare : {
        DogWeekday : {type : Number},
        DogweekdayPrice : {type : Number},

        DogWeekend : {type : Number },
        DogweekendPrice : {type : Number} , 
        
        CatWeekday : {type : Number}, 
        CatweekdayPrice : {type : Number}, 
        
        CatWeekend : {type : String},
        CatweekendPrice : {type : String},
        
        Serviceid : {type : String} , 
        name : {type : String} ,
        address : {type : String},
        zipcde : {type : String} ,
        total : {type : Number},
        date : {type : String} , 
        time : {type : String} ,
    },
    user : {type: Schema.Types.ObjectId, ref: User}
})

module.exports = Cart = mongoose.model('Cart',CartSchema);
