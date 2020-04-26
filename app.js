/*to create this node.js project we used npm init*/
/*to run this file we use node app.js or node app OR
just changing this part in the package.json file to   
"scripts": {
    "start": "node app"
  }, and type npm start*/
var express = require('express');
var mongoose = require('mongoose');
const path = require('path');


mongoose.connect('mongodb://localhost/airbnb');
var db = mongoose.connection;
db.once('open',function(){
    console.log('Connected to MongoDB');
});
db.on('error',function(err){
    console.log(err);
});

var my_app = express();

var User = require('./models/user');
var Property = require('./models/property');
var Booking = require('./models/booking');
var Review = require('./models/review');

my_app.get('/',function(request,response){ //shown on localhost:3000
    // User.find({},function(err,users){
    //     if(err){
    //         response.send('hello world in if');
    //         console.log(err);
    //     }
    //     else{  //////
    //         // response.send('hello world in else');
    //         response.status(200).json({
    //             title:'Users',
    //             users:users
    //             })
    //     }
    // })
    // Property.find({},function(err,properties){
    //     if(err){
    //         console.log(err);
    //     }
    //     else{  //////
    //         response.status(200).json({
    //             title:'Properties',
    //             properties:properties
    //             })
    //     }
    // })
    // Booking.find({},function(err,bookings){
    //     if(err){
    //         console.log(err);
    //     }
    //     else{  //////

    //         response.status(200).json({
    //             title:'Bookings',
    //             bookings:bookings
    //             })
    //     }
    // })
    Review.find({},function(err,reviews){
        if(err){
            console.log(err);
        }
        else{  //////
            response.status(200).json({
                title:'Reviews',
                reviews:reviews
                })
        }
    })
    // response.send('hello world after express!');
});
var port = 4000
my_app.listen(port,function(){
    console.log('Server started at port number ', port);
});


// console.log('hello world after express!')