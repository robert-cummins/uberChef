const express = require('express')
const hbs = require('express-handlebars')
const app = express()
const home = require('./routes/home')
const db = require('./dbFunctions')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


app.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
  }))
 
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use('/', home)
// app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));



module.exports = app