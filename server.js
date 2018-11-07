const express = require('express');
const fs = require('fs');
const appFile = require('./app');
const schedule = require('node-schedule');
//defaults to 3000 if PORT doesn't exist on process.env
const port = process.env.PORT || 3000;

var app = express();

var schedule = ('* 10 12 * * *', () => {

    appFile.postTweets();

});

// setInterval( () => {

//      appFile.postTweets();
// }, 30000);


app.listen(port, () => {  //see port variable defined near top of app
    console.log(`Server is up and running on port ${port}`);
});