var express = require('express');
var router = express.Router();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

var configAuth = require('../config/auth');

passport.use(new GoogleStrategy({
  clientID        : configAuth.googleAuth.clientID,
  clientSecret    : configAuth.googleAuth.clientSecret,
  callbackURL     : configAuth.googleAuth.callbackURL,
},
function(token, refreshToken, profile, done) {
  return done(null, configAuth.extractProfile(profile));
}));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

/* GET home page */
router.get('/', function(req, res, next) {
  console.log("Session: ", req.user);
  res.render('index', { title: 'Inicio' });
});
/* GET app main page */
router.get('/app', function(req, res, next) {
  console.log("Session: ", req.user);
  res.render('index', { title: 'Inicio' });
});
/* GET Login */
router.get('/login', function(req, res, next) {
  res.render('login');
});
/* POST login api */
router.post('/is-user', function(req, res, next) {
  res.render('index', { title: 'Fallo' });
});
/* GET google redirect */
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
/* GET google callbakc */
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/mal' }), function(req, res) {
    passport.authenticate('google');
    res.redirect('/');
});

module.exports = router;
