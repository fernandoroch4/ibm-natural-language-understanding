const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1.js');
const express = require('express');
const config = require('./config');
const nlu = require('./nlu');

const app = express();
app.use(express.json());

app.post('/analyze', async (req, res) => {
  try {
    const text = req.body.text;
    res.send(await nlu(text));
  } catch (error) {
    console.log('error', error);
    res.status(500).json(error.message);
  } 
});

app.listen(config.express, () => console.log(`Listenning on port ${config.express}`));