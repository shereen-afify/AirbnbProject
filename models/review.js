var mongoose = require('mongoose');
//users schema
//https://www.tutorialspoint.com/mongodb/mongodb_query_document.htm
//https://docs.mongodb.com/manual/reference/operator/aggregation/match/#pipe._S_match
let reviews_schema = mongoose.Schema({
    reviewid:{
        type: String,
        required:true
    },
    propertyid:{
        type: String,
        required:true
    },
    useremail:{
        type: String,
        required:true
    },
    cereationdate:{
        type: String,
        required:true
    },
    lastupdatedate:{
        type: String,
        required:true
    },
    content:{
        type: String,
        required:true
    }
});
let Review = module.exports = mongoose.model('Review',reviews_schema);
