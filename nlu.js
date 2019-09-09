const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1.js');
const config = require('./config');

module.exports = text => {
  return new Promise((resolve, reject) => {
    const nlu = new NaturalLanguageUnderstandingV1({
      version: config.version,
      iam_apikey: config.apiKey,
      url: config.url
    });
    
    const options = {
      html: text,
      features: {
        sentiment: {}
      }
    };
    nlu.analyze(options, function (err, res) {
      if (err) {
        console.log(err);
        return reject(err);
      }
      resolve(res);
    });
  });
};