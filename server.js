const express = require('express');
const fs = require('fs');
const appFile = require('./app');
const schedule = require('node-schedule');

//defaults to 3000 if PORT doesn't exist on process.env
const port = process.env.PORT || 3000;

var app = express();

//see https://www.npmjs.com/package/node-schedule for more information
var j = schedule.scheduleJob('30 12 * * *', () => {
    appFile.postTweets();
});

app.listen(port, () => {  //see port variable defined near top of app
    console.log(`Server is up and running on port ${port}`);
});