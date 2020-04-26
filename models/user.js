var mongoose = require('mongoose');
//users schema
//https://www.tutorialspoint.com/mongodb/mongodb_query_document.htm
//https://docs.mongodb.com/manual/reference/operator/aggregation/match/#pipe._S_match
let users_schema = mongoose.Schema({
    useremail:{
        type: String,
        required:true
    },
    userpassword:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    userphone:{
        type: String,
        required:true
    },
});
let User = module.exports = mongoose.model('User',users_schema);