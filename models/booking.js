var mongoose = require('mongoose');
//users schema
//https://www.tutorialspoint.com/mongodb/mongodb_query_document.htm
//https://docs.mongodb.com/manual/reference/operator/aggregation/match/#pipe._S_match
let bookings_schema = mongoose.Schema({
    referencenumber:{
        type: String,
        required:true
    },
    propertyid:{
        type: String,
        required:true
    },
    bookeremail:{
        type: String,
        required:true
    },
    startdate:{
        type: String,
        required:true
    },
    enddate:{
        type: String,
        required:true
    }
});
let Booking = module.exports = mongoose.model('Booking',bookings_schema);
