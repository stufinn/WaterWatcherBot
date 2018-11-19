// see tutorial here: https://codeburst.io/build-a-simple-twitter-bot-with-node-js-in-just-38-lines-of-code-ed92db9eb078

const fs = require('fs');
const tweet = require('./tweet');


// parses data from the DWA JSON file
const postTweets = () => {

    let fileData = JSON.parse( fs.readFileSync('data/DWA.json') );
    //call "tweet" module with ALL file data
    tweet.tweetActive(fileData);

};

module.exports = {
    postTweets
};

