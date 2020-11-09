const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const ServiceSchema = new Schema({
    zipcode : {type : String},
    organization : {
        name : {type : String},
        organizationName: { type: String },
        email : {type : String},
        phone: {type : String},
        address : {
            no : {type : Number},  
            street : {type : String},
            locality : {type : String},
            city : {type : String},
            state : {type : String}
        },
    },
    daycare : {
        opentime : {
            weekdays : {type : String},
            weekends : {type : String}
        },
        description : {type : String},
        price : {
            dogs : {
                weekdays : {type : String},
                weekends : {type : String}
            },
            cats : {
                weekdays : {type : String},
                weekends : {type : String}
            },
        },
        foodDetails : {
            dogs : {
                breakfast : {
                    food : {type : String},
                    price : {type : String},
                },
                lunch : {
                    food : {type : String},
                    price : {type : String},
                },
                dinner : {
                    food : {type : String},
                    price : {type : String},
                }
            },
            cats : {
                breakfast : {
                    food : {type : String},
                    price : {type : String},
                },
                lunch : {
                    food : {type : String},
                    price : {type : String},
                },
                dinner : {
                    food : {type : String},
                    price : {type : String},
                }
            }
        },
        DCImage : [{type : String}],
        additionalServices : {type : String},
    },
    grooming : {
        opentime : {
            weekdays : {type : String},
            weekends : {type : String}
        },
        description : {type : String},
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
        GroomingImage : [{type : String}],
        additionalServices : {type : String},
    },
    dogwalker : {
        availabletime : {
            weekdays : {type : String},
            weekends : {type : String}
        },
        description : {type : String},
        DWImage : [{type : String}],
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
        TrainingImage : [{type : String}],
        price : {
            daily : {type : String},
            weekly : {type : String},
            monthly : {type : String}
        },
        additionalServices : {type : String},
    },
    breeding : {
        breed : {type : String},
        age : {type : String},
        height : {type : String},
        weight : {type : String},
        color : {type : String},
        eyeColor : {type : String},
        price : {type : String},
        number : {type : String},
        breedingImages:[{type:String}],
        location : {
            building : {type : String},
            street : {type : String},
            locality:{type: String},
            city : {type : String},
            zipcode : {type : String}
        },
    },
    user : {type: Schema.Types.ObjectId, ref: User},
    
});


module.exports = Services = mongoose.model('Services', ServiceSchema);
