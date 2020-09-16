const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const ServiceSchema = new Schema({
    zipcode : {type : String},
    organisation : {
        name : {type : String},
        email : {type : String},
        phone: {type : String},
        location : {type : String},
        
    },
    daycare : {
        opentime : {
            from : {type : String},
            to : {type : String}
        },
        description : {type : String},
        pictures : {type : String},
        price : {
            dogs : {type : String},
            cats : {type : String},
        },
        FoodDetails : {
            Dogs : {
                Breakfast : {
                    food : {type : String},
                    price : {type : String},
                },
                lunch : {
                    food : {type : String},
                    price : {type : String},
                },
                Dinner : {
                    food : {type : String},
                    price : {type : String},
                }
            },
            Cats : {
                Breakfast : {
                    food : {type : String},
                    price : {type : String},
                },
                lunch : {
                    food : {type : String},
                    price : {type : String},
                },
                Dinner : {
                    food : {type : String},
                    price : {type : String},
                }
            }
        },
        additionalServices : {type : String},
    },
    grooming : {
        opentime : {
            from : {type : String},
            to : {type : String}
        },
        description : {type : String},
        pictures : {type : String},
        groomingService : {
            Dogs : [{
                service : {type : String},
                price : {type : String},
            }],
            Cats : [{
                service : {type : String},
                price : {type : String},
            }],
        },
        additionalServices : {type : String},
    },
    dogwalker : {
        availabletime : {
            weekdays : {type : String},
            weekends : {type : String}
        },
        description : {type : String},
        pictures : {type : String},
        price : {
            weekdays : {type : String},
            weekends : {type : String}
        },
        additionalServices : {type : String},
    },
    trainer : {
        availabletime : {
            weekdays : {type : String},
            weekends : {type : String}
        },
        description : {type : String},
        pictures : {type : String},
        price : {
            daily : {type : String},
            weekly : {type : String},
            monthly : {type : String}
        },
        additionalServices : {type : String},
    },
    user : {type: Schema.Types.ObjectId, ref: User}  
})


module.exports = Services = mongoose.model('Services', ServiceSchema);