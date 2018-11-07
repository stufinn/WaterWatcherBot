// see tutorial here: https://codeburst.io/build-a-simple-twitter-bot-with-node-js-in-just-38-lines-of-code-ed92db9eb078
// require('dotenv').config();

const fs = require('fs');
const tweet = require('./tweet');
// const http = require('http');
// const sortData = require('./sortData.js');

// const Twitter = require('twitter');

// var twitter = new Twitter({
//     consumer_key: process.env.CONSUMER_KEY,
//     consumer_secret: process.env.CONSUMER_SECRET,
//     access_token_key: process.env.ACCESS_TOKEN_KEY,
//     access_token_secret: process.env.ACCESS_TOKEN_SECRET
// });


let fileData = JSON.parse( fs.readFileSync('data/DWA.json') );
// var tweet = sortData.randomActive(fileData);

// var tweetParameters = {
//     status: tweet
// };

// twitter.post('statuses/update',tweetParameters, (err,response)=> {
//     if (err) {
//         console.log('Something went wrong:', err);
//     } else {
//         console.log('Tweet posted');
//         // console.log(response);
//     }
// });

setInterval( () => {
    tweet.tweetActive(fileData);
} , 30000);

// tweet.tweetActive(fileData);

