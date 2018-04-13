const Twit = require('twit');
const config = require('./config');

const user = '@RealJonAhNee'

const bot = new Twit(config);

const searchParams = {
  q: 'nodejs, NodeJs, javascript, devops, developer',
  result_type: 'recent',
  count: 5
}

const retweet = () => {bot.get('search/tweets', searchParams, (err, data, res) => {
  if (err) {
    console.log(err)
  } else {
    let ranNum = Math.floor(Math.random() * 10) + 1
    let retweetId = data.statuses[ranNum].id_str;

    bot.post('statuses/retweet/:id', {
      id: retweetId,
    }, (err, res) => {
      if (err) {
        console.log(err.message)
      } else {
        console.log('retweeted!')
      }
    })
  }
})
}

retweet();

setInterval(retweet, 60000);

// stream that tracks user
// const stream = bot.stream('statuses/filter', {
//   track: user
// })

// bot.post('statuses/update', {
//   status: 'hello world!'
// }, (err, data, response) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(`${data.text} tweeted!`)
//   }
// });

// bot.get('followers/list', {
//   screen_name: 'RealJonAhNee',
//   count: 5
// }, (err, data, res) => {
//   if (err) {
//     console.log(err)
//   } else {
//     data.users.forEach(user => {
//       console.log(user)
//     })
//   }
// })

// bot.get('friendships/lookup', {
//   screen_name: 'jlieu'
// }, (err, data, res) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// monitor incoming tweets, pull friendship info
// stream.on('tweet', t => {
//   console.log(t)
//   bot.get('friendships/lookup', {
//     screen_name: t.user.name
//   }, (err, data, res) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(data)
//     }
//   })
// })

// stream.on('connect', res => {
//   console.log('stream connected');
// });

// stream.on('disconnect', res => {
//   console.log('stream disconnected');
// });