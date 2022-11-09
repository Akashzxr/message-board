var express = require('express');
var router = express.Router();
const moment = require('moment');

let date = moment().startOf('day').fromNow();
let date2 = moment().startOf('hour').fromNow();
const messages =[
  {
    text:"hi",
    user:"amando",
    added: date
  },
  {
    text:"helo every one",
    user:"baby",
    added: date2
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'mini-message-board',messages: messages});
});

router.post('/new',function(req,res, next){
  const messageText=req.body.messageText;
  const username = req.body.user;
  messages.push({
    text: messageText,
    user: username,
    added: moment()
    .startOf('hour' - 1)
    .fromNow(),
  })
  res.redirect('/');
})

module.exports = router;
