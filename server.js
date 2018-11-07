const express = require('express');
const fs = require('fs');
const appFile = require('./app');
//defaults to 3000 if PORT doesn't exist on process.env
const port = process.env.PORT || 3000;

var app = express();

setInterval( () => {

    app.use ( (req, res, next) => {
        var now = new Date().toString();

        var log = `${now}: ${req.method} ${req.url}`;
        console.log(log);
        fs.appendFile('server.log', log + '\n', (err) => {
            if (err) {
                console.log('Unable to append to server.log.');
            }
        });

        next();  //must be called or else the middleware will call the application to hang
    });


    appFile.postTweets();
}, 30000);


app.listen(port, () => {  //see port variable defined near top of app
    console.log(`Server is up and running on port ${port}`);
});