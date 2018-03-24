const Twit = require('twit');
const config = require('./config');

const user = '@RealJonAhNee'

const bot = new Twit(config);

// stream that tracks user
const stream = bot.stream('statuses/filter', {
  track: user
})

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

// stream.on('reconnect', )