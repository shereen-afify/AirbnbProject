var mongoose = require('mongoose');
//users schema
//https://www.tutorialspoint.com/mongodb/mongodb_query_document.htm
//https://docs.mongodb.com/manual/reference/operator/aggregation/match/#pipe._S_match
let properties_schema = mongoose.Schema({
    propertyid:{
        type: String,
        required:true
    },
    location:{
        type: String,
        required:true
    },
    owneremail:{
        type: String,
        required:true
    },
    price:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    numberofguests:{
        type: String,
        required:true
    },
    rating:{
        type: String,
        required:true
    }
    
});
let Property = module.exports = mongoose.model('Property',properties_schema);
