require('dotenv').config();

const Twitter = require('twitter');
const sortData = require('./sortData');

const twitter = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

// tweet about an active water advisory
//input: ALL file data
const tweetActive = (data) => {

    // retrieve a random active water advisory from data with sortData module
    let tweet = sortData.randomActive(data);

    let tweetParameters = {
        status: tweet
    };

    twitter.post('statuses/update',tweetParameters, (err,response)=> {
        if (err) {
            console.log('Something went wrong:', err);
        } else {
            console.log('Tweet posted');
            // console.log(response);
        }
    });
};

module.exports = {
    tweetActive
};