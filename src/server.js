const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/receive-json', async (req, res) => {
  try {
    const jsonBody = req.body;
    const targetAPI = 'https://script.google.com/macros/s/AKfycbxkQvks9FebIC9Cdp97Xy2BOQrhgtTm6QZsD5wKgYtgWx85b1K6e4eVD6ko-U5uLmc7/exec';

    const response = await axios.post(targetAPI, jsonBody);
    res.send(response.data);
  } catch (error) {
    console.error('Error forwarding JSON:', error);
    res.status(500).send('Error forwarding JSON');
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
