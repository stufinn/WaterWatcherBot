// see tutorial here: https://codeburst.io/build-a-simple-twitter-bot-with-node-js-in-just-38-lines-of-code-ed92db9eb078

const fs = require('fs');
const tweet = require('./tweet');



let fileData = JSON.parse( fs.readFileSync('data/DWA.json') );


setInterval( () => {
    tweet.tweetActive(fileData);
} , 30000);



