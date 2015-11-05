// The variable "tweetData" is defined for us in that data.js file

var formatASingleTweet = function(tweet) {
  return tweet.screen_name + ": " + tweet.text
}

var formatTweets = function(data) {
  // Returns an array of "username: text" strings for all tweets

  return data.map(formatASingleTweet)
}

console.log( "Formatted Tweets:", formatTweets(tweetData) )


var doesTweetHavePhoto = function(tweet) {
  if (tweet.entities) {
    if (tweet.entities.media) {
      return true
    }
  }

  return false
}

var findTweetsWithPhotos = function(data) {
  // Returns an array containing only tweets with photos

  return data.filter(doesTweetHavePhoto)
}

console.log( "Tweets With Photos:", findTweetsWithPhotos(tweetData) )

var getPhotoURLs = function(data) {
  return findTweetsWithPhotos(data).map(function(tweet){
    return tweet.entities.media[0].media_url
  })
}

console.log( "Photo URLs:", getPhotoURLs(tweetData) )


var getRetweetCount = function(data) {
  // Returns the number of total retweets

  /*
  var tweet, totalRetweets = 0
  for (var i = 0; i < data.length; i++) {
    tweet = data[i]

    totalRetweets = totalRetweets + tweet.retweet_count
  }

  return totalRetweets
  */

  return data.reduce(function(memory, tweet){
    return memory + tweet.favorite_count
  }, 0)
}

console.log( "Favorites:", getRetweetCount(tweetData) )

var mostRetweets = function(data) {

  return data.reduce(function(memory, tweet){
    console.log(memory, tweet.retweet_count)
    if (memory >= tweet.retweet_count) {
      return memory
    }

    return tweet.retweet_count
  }, 0)

}

console.log( "Retweets:", mostRetweets(tweetData) )