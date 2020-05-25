/**
 * @file User Model
 */

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
    id: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    username: {
        type: String,
        required: [true, 'Username Required']
    },
    firstname: {
        type: String,
        required: [true, 'First Name Required']
    },
    lastname: {
        type: String,
        required: [true, 'Last Name Required']
    },
    password: {
        type: String,
        required: [true, 'Password Required']
    },
    api_key: {
        type: String,
        require: [true, 'api_key required']
    }
});

UserSchema.pre('save', function(next) {
    var user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(4, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, this.password, function(error, isMatch) {
            if (error) {
                reject(error)
            } else {
                resolve(isMatch);
            }
        });
    })
};

module.exports = mongoose.model('User', UserSchema);
