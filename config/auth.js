var envs = require('envs');

module.exports = {
    'googleAuth' : {
        'clientID'      : envs('CLIENT_ID_TO_DO_JABAMA'),
        'clientSecret'  : envs('CLIENT_SECRET_TO_DO_JABAMA'),
        'callbackURL'   : 'http://to-do.jabama.com:3000/auth/google/callback'
    }
};
