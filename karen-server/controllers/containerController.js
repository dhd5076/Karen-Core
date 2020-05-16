/**
 * @file Container Controller
 */
var logger = require('../utils/logger');
var Container = require('../models/Container');
var Item = require('../models/Item');

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
 * Create container
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
 * Delete container
 * @param {string} id Container id
 */ 
module.exports.delete = function(id) {
    return new Promise((resolve, reject) => {
        Container.deleteOne({ id : id})
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
}

/**
 * Get property of a container
 * @param {String} id
 * @param {String} property
 */
module.exports.getProperty = function(id, property) {
    return new Promise((resolve, reject) => {
        Container.findOne({ id : id})
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
 * @param {String} id Container id
 * @param {String} property The name of the property to set
 */
module.exports.setProperty = function(id, property) {
    return new Promise((resolve, reject) => {
        Container.findOne({ id : id})
        .then((container) => {
            if(container) {
                container.properties[property] = value;
                resolve();
            } else {
                reject(new Error(`No container with id ${id}`));
            }
        })
        .catch((error) => {
            reject(new Error(error));
        });
    });
}

/**
 * Add item to container
 * @param {String} id Container ID to add item to
 * @param {String} item ID of the item to add to container
 */
module.exports.addItem = function(id, item) {
    return new Promise((resolve, reject) => {
        Container.findOne({ id : id})
        .then((container) => {
            if(container) {
                Item.findOne({ id : item})
                .then((item) => {
                    if(item) {
                        container.items.push(item);
                        resolve();
                    } else {
                        reject(new Error(`No item with id ${id}`))
                    }
                })
            } else {
                reject(new Error(`No container with id ${id}`));
            }
        })
        .catch((error) => {
            reject(error);
        });
    });
}

/**
 * Remove item from container
 * @param {String} id Container ID to remove item from
 * @param {String} item ID of the item to remove from the container
 */
module.exports.removeItem = function(id, item) {
    return new Promise((resolve, reject) => {
        Container.findOne({ id : id})
        .then((container) => {
            if(container) {
                Item.findOne({ id : item})
                .then((item) => {
                    if(item) {
                        reject(new Error(`Container.removeItem Endpoint Not Implemented`))
                    } else {
                        reject(new Error(`No item with id ${id}`));
                    }
                })
            } else {
                reject(new Error(`No container with id ${id}`));
            }
        })
        .catch((error) => {
            reject(error);
        })
    });
}

/**
 * Add container to container
 * @param {String} id Container ID to add item to
 * @param {String} item ID of the container to add to container
 */
module.exports.addContainer = function(id, container) {
    return new Promise((resolve, reject) => {
        Container.findOne({ id : id})
        .then((container) => {
            if(container) {
                Item.findOne({ id : item})
                .then((item) => {
                    if(item) {
                        container.items.push(item);
                        resolve();
                    } else {
                        reject(new Error(`No item with id ${id}`))
                    }
                })
            } else {
                reject(new Error(`No container with id ${id}`));
            }
        })
        .catch((error) => {
            reject(error);
        });
    });
}

/**
 * Remove container from container
 * @param {String} id Container ID to remove item from
 * @param {String} container ID of the container to remove from the container
 */
module.exports.removeContainer = function (id, container) {
    return new Promise((resolve, reject) => {
        Container.findOne({ id : id})
        .then((container) => {
            if(container) {
                Item.findOne({ id : item})
                .then((item) => {
                    if(item) {
                        reject(new Error(`Container.removeContainer Not Implemented`))
                    } else {
                        reject(new Error(`No item with id ${id}`));
                    }
                })
            } else {
                reject(new Error(`No container with id ${id}`));
            }
        })
        .catch((error) => {
            reject(error);
        })
    });
}