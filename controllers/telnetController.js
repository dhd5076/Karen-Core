/**
 * @file Telnet Controller
 */

 /**
  * @param {TelnetClient} client
  */
 module.exports.handleClient = function(client) {
     client.do.transmit_binary()
     
     client.do.window_size()

     client.on('data', function(data) {
        client.write(data);
     });

     client.write('Connected To Karen Core v0.0.1'); //TODO: Config File Property For Version
 }