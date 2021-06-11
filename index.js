var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({
    secret: "Shh, its a secret!",
    resave: false,
    saveUninitialized: false
}));

app.get('/', function(req, res){
    hostname = process.env.HOSTNAME;
    podname = process.env.POD_NAME;
    sessionId = req.session.id;

    console.log('=====>')
    console.log('Cookies: ', req.cookies);
    console.log('SessionId: ', sessionId);
    
    res.cookie('name', 'session-app', {maxAge: 360000});

    msg = "";
    if(req.session.page_views){
      req.session.page_views++;
    } else {
      req.session.page_views = 1;
    }
    msg = "Visits (" + req.session.page_views + "), " +
      "Host ("+ hostname +"), Pod (" + podname + "), Session.id (" +
      sessionId + ")";
    

    /**
    if (sess.username && sess.password) {
    }*/

    res.send(msg);

});

// ==============

app.post("/login", (req, res) => {
  const sess = req.session;
  const { username, password } = req.body
  sess.username = username
  sess.password = password
  // add username and password validation logic here if you want.
  // If user is authenticated send the response as success
  res.end("success")
});

app.get("/logout", (req, res) => {
  req.session.destroy(err => {
      if (err) {
          return console.log(err);
      }
      res.redirect("/")
  });
});

app.get('/nocookie', function(req, res){
  hostname = process.env.HOSTNAME;
  podname = process.env.POD_NAME;
  sessionId = req.session.id;

  console.log('=====>')
  console.log('Cookies: ', req.cookies);
  console.log('SessionId: ', sessionId);

  msg = "";
  if(req.session.page_views){
    req.session.page_views++;
  } else {
    req.session.page_views = 1;
  }
  msg = "Visits (" + req.session.page_views + "), " +
    "Host ("+ hostname +"), Pod (" + podname + "), Session.id (" +
    sessionId + ")";

  res.send(msg);
});

// ==============

app.listen(3000);
