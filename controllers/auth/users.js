var User = require('../../models/users/user');

var UserCtrl = {};
UserCtrl.googleCallBack = function(googleUser) {
    User.find({
        email: googleUser.email
    }, function(err, user) {
        if (err) {
            throw err;
        }
        if (!user.length) {
            var newUser = new User({
                username: googleUser.displayName,
                password: null,
                avatar: googleUser.image,
                email: googleUser.email,
                googleId: googleUser.id,
                created_at: new Date()
            });

            newUser.save(function(err) {
                if (err) {
                    throw err;
                }
                console.log('User saved successfully!');
            });
        }
    });
};

module.exports = UserCtrl;
