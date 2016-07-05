var express = require('express');
var router = express.Router();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

var configAuth = require('../config/auth');

function extractProfile (profile) {
  var imageUrl = '';
  if (profile.photos && profile.photos.length) {
    imageUrl = profile.photos[0].value;
  }
  profileS =  {
    id: profile.id,
    displayName: profile.displayName,
    image: imageUrl
  };
  console.log(profileS);
  return profileS;
}

passport.use(new GoogleStrategy({
  clientID        : configAuth.googleAuth.clientID,
  clientSecret    : configAuth.googleAuth.clientSecret,
  callbackURL     : configAuth.googleAuth.callbackURL,
},
function(token, refreshToken, profile, done) {
  return done(null, extractProfile(profile));
}));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.user);
  res.render('index', { title: 'no fallo', user: req.user });
});

router.get('/mal', function(req, res, next) {
  res.render('index', { title: 'fallo' });
});

router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/mal' }), function(req, res) {
    passport.authenticate('google');
    res.redirect('/');
});

module.exports = router;
