var axios = require('axios');

module.exports.MakeNote = function(note) {
    axios.get('https://maker.ifttt.com/trigger/note/with/key/bt0DsUfF6NZZ2TcVctisWb?value1=Note&value2=' + note);
}

