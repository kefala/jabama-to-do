var envs = require('envs');

module.exports = {
    'googleAuth' : {
        'clientID'      : envs('CLIENT_ID_TO_DO_JABAMA'),
        'clientSecret'  : envs('CLIENT_SECRET_TO_DO_JABAMA'),
        'callbackURL'   : 'http://to-do.jabama.com:3000/auth/google/callback'
    },
    extractProfile: function (profile) {
      var imageUrl = '',
          email = '';

      if (profile.photos && profile.photos.length) {
        imageUrl = profile.photos[0].value;
      };
      if (profile.emails && profile.emails.length) {
        email = profile.emails[0].value;
      };
      return {
        id: profile.id,
        displayName: profile.displayName,
        email: email,
        image: imageUrl
      };
    }
};
