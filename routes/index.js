var express = require('express');
var router = express.Router();
const messages =[
  {
    text:"hi",
    user:"amando",
    added: new Date()
  },
  {
    text:"helo every one",
    user:"baby",
    added: new Date()
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
    added: new Date()
  })
  res.redirect('/');
})

module.exports = router;
