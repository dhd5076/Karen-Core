var colors = require('colors');
var fs = require('fs');
var moduleName;

module.exports.log = function(module, message){
    output(module, colors.green(message));
}

module.exports.info = function(module, message){
    output(module, colors.grey(message));
}

module.exports.warn = function(module, message){
   
    output(module, colors.yellow(message));
}
module.exports.error = function(module, message){
    output(module, colors.red(message));
}

function output(module, message) {
    console.log(
        colors.cyan(new Date(Date.now()).toLocaleString()) 
    +   colors.magenta(" [" + module + "] ") 
    +   message);

    fs.appendFile('./logs/output.log', 
    new Date(Date.now()).toLocaleString() +
    " [" + module + "] " +
    colors.stripColors(message) +
    "\n", function(err) {

    });
}