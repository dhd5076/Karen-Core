const WindowsToaster = require('node-notifier').WindowsToaster;
const path = require('path');
const request = require('request');

var notifier = new WindowsToaster({
    withFallback: false, // Fallback to Growl or Balloons? 
    customPath: void 0 // Relative path if you want to use your fork of toast.exe 
});

module.exports.Notify = function(message) {
    notifier.notify({
        title: 'Karen',
        message: message,
        icon: path.join(__dirname, 'img/Icon.jpg') , // Absolute path to Icon 
        sound: true, // true | false. 
        wait: true, // Wait for User Action against Notification 
    }, function(error, response) {
        console.log(response);
    });

    request.post('https://api.pushover.net/1/messages.json', {form:{
        token: 'azg7auj3ro31tqooevf6jorc4a317w',
        user: 'uxtm4e3zxjjuwjrjv4na9tusxnakkc',
        message: message
    }});
}