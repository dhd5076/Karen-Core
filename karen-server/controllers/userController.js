/**
 * @file Controls Users
 */

var User = require('../models/User');
var Container = require('../models/Container');
var randomstring = require('randomstring');

/**
 * Authenticates a user
 * @param {String} username The username to auth with
 * @param {String} password The password to auth with
 * @returns {String} API Auth Key
 */
exports.auth = function(username, password) {
    return new Promise((resolve, reject) => {
        User.findOne({username : username})
        .then((user) => {
            if(user) {
                user.comparePassword((isMatch) => {
                    if(isMatch) {
                        resolve(user.api_key);
                    } else {
                        reject(new Error("Incorrect Username Or Password"));
                    }
                })
            } else {
                reject(new Error("Incorrect Username Or Password"));
            }
        })
        .catch((error) => {
            reject(error);
        });
    });
}

/**
 * Create a new user
 * @param {String} username The username of the user
 * @param {String} firstname The firstname of the user
 * @param {String} lastname The lastname of the user
 * @param {String} password The password of the user
 * @returns {String} The id of the user created
 */
exports.create = function(username, firstname, lastname, password) {
    return new Promise((resolve, reject) => {
        var user = new User({
            username: username,
            firstname: firstname,
            lastname: lastname,
            password: password,
            api_key: randomstring.generate(32),
            root_container: new Container({
                type: "Root",
                name: "Root",
                containers: [],
                items: [],
                properties: []
            })
        });
        user.save()
        .then(() => {
            resolve(user.id);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

/**
 * Get user's root container
 */


/**
 * Get all users
 * @returns {User[]} All Users
 */
exports.getAll = function() {
    return new Promise((resolve, reject) => {
        User.find({}, function(err, users) {
            if(err) {
                reject(err);
            } else {
                resolve(users);
            }
        });
    });
}

/** 
 * Get a user
 * @param {String} id
 * @returns {User} The user with that id
 */
exports.get = function(id) {
    return new Promise((resolve, reject) => {
        User.findOne({ id : id })
        .then((user) => {
            console.log(user)
            resolve(user);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

/**
 * Delete a user
 * @param {String} id The username of the user to delete
 */
exports.delete = function(id) {
    return new Promise((resolve, reject) => {
        User.deleteOne({ id: id })
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
}

/**
 * Delete all users
 */
exports.deleteAll = function() {
    return new Promise((resolve, reject) => {
        User.deleteMany({})
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject();
        });
    });
}