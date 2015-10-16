// The variable "tweetData" is defined for us in that data.js file

//-----------

var formatSingleTweet = function(tweet){
  return tweet.screen_name + ": " + tweet.text
}

var formatTweets = function(data) {
  // Returns an array of "username: text" strings for all tweets
  return data.map(formatSingleTweet)
}

console.log( "Formatted Tweets:", formatTweets(tweetData) )

//-----------

var checkTweetForPhoto = function(tweet){
  if (tweet.entities && tweet.entities.media) {
    return true
  }

  return false
}

var findTweetsWithPhotos = function(data) {
  // Returns an array containing only tweets with photos

  return data.filter(checkTweetForPhoto)
}

console.log( "Tweets With Photos:", findTweetsWithPhotos(tweetData) )

//-----------

var getRetweetCountForTweet = function(memory, tweet) {
  return memory + tweet.retweet_count
}

var getRetweetCount = function(data) {
  // Returns the number of total retweets

  // This is a little bit awkward to write
  return data.reduce(getRetweetCountForTweet, 0)
}

console.log( "Retweets:", getRetweetCount(tweetData) )