const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceStatus = new Schema({
    CustomerName : { type : String},
    CustomerNumber : {type : String},
    ServiceName : {type : String},
    Details : {type: String},
    Date : {type: String},
    Status : {type : String},
    Comments : {type : String},
    ServiceId : {type: Schema.Types.ObjectId},
    CustomerId : {type: Schema.Types.ObjectId},
    ServiceProvider : {type: Schema.Types.ObjectId},
    message : [{
        sender : {type: String},
        content : {type : String},
        time : {type : String}
    }]
})

module.exports = Requests = mongoose.model('ServiceStatus',ServiceStatus);
