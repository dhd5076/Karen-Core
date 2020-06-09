/**
 * @file Speech Controller
 */
const textToSpeech = require('@google-cloud/text-to-speech');
const client = new textToSpeech.TextToSpeechClient();

 /**
  * @param {String} text Text to convert to speech
  * @returns {Promise.<BinaryType>} The speech in mp3 format
  */
 module.exports.getSpeech = function(text) {
   return new Promise((resolve, reject) => {
    const request = {
      input: {text: text},
      voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
      audioConfig: {audioEncoding: 'MP3'},
    };
   
    const [response] = await client.synthesizeSpeech(request);
    resolve(response)
   });
}