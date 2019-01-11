const WindowsToaster = require('node-notifier').WindowsToaster;
const path = require('path');

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
}