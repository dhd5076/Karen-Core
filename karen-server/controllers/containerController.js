/**
 * @file Container Controller
 */
var logger = require('../utils/logger');
var Container = require('../models/Container');

/**
 * Get all containers
 * @returns {Container[]} All containers
 */
module.exports.getAll = function() {
    return new Promise((resolve, reject) => {
        Container.find()
        .then((containers) => {
            resolve(containers);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

/**
 * Get container by id
 * @param {String} id The id of the container
 * @returns {Container} A container matching the query
 */
module.exports.get = function(id) {
    return new Promise((resolve, reject) => {
        Container.findOne({ id : id })
        .then((container) => {
            resolve(container);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

/**
 * Get containers by name
 * @param {String} name The name to search with
 * @returns {Container[]} Containers matching the query
 */
module.exports.getByName = function(name) {
    return new Promise((resolve, reject) => {
        Container.find({ name : name })
        .then((container) => {
            resolve(containers);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

/**
 * Get containers by type
 * @param {String} type 
 * @returns {Container[]} Containers matching the query
 */
module.exports.getByType = function(type) {
    return new Promise((resolve, reject) => {
        Container.find({ type : type })
        .then((containers) => {
            resolve(containers);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

/**
 * Create Container
 * @param {String} name Container name
 * @param {String} type Container type
 */
module.exports.create = function(name, type) {
    return new Promise((resolve, reject) => {
        var container = new Container({
            type : type,
            name : name,
            containers : [],
            items : [],
            properties : new Object()
        });

        container.save()
        .then(() => {
            resolve(container.id);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

/**
 * Delete Container  
 */ 

/**
 * Get property of a container
 * @param {String} id
 * @param {String} property
 */
module.exports.getProperty = function(id, property) {
    return new Promise((resolve, reject) => {
        Property.findOne({ id : id})
        .then((container) => {
            if(container) {
                if(container.properties.hasOwnProperty(property)) {
                    resolve(container.properties[property]);
                }
            } else {
                reject(new Error("Container not found"));
            }
        })
        .catch((error) => {
            reject(error);
        });
    });
}

/**
 * Set property of a container 
 */
module.exports.setProperty = function(id, property) {
    return new Promise((resolve, reject) => {
        Container.findOne({ id : id})
        .then((container) => {
            if(container) {
                if(container.properties.hasOwnProperty(property)) {
                    container.properties[property] = value;
                    resolve();
                } else {
                    reject(new Error(`Container with id ${id} has no property ${property}`));
                }
            } else {
                reject(new Error(`No container with id ${id}`));
            }
        })
        .catch((error) => {
            reject(new Error(error));
        });
    });

/**
 * Add Item To Container
 */

/**
 * Remove Item From Container
 */

/**
 * dasd
 */