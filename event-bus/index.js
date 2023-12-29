const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
    const event = req.body; // this is our event request

    // we send off the event request to the appropriate service

    // posts srvc
    axios.post('http://localhost:4000/events', event).catch((err) => {
        console.log(err.message);
    });
    
    // comments srvc
    axios.post('http://localhost:4001/events', event).catch((err) => {
        console.log(err.message);
    });

    // query srvc
    axios.post('http://localhost:4002/events', event).catch((err) => {
        console.log(err.message);
    });

    // moderation srvc
    axios.post('http://localhost:4003/events', event).catch((err) => {
        console.log(err.message);
    });

    res.status(200).send({ status: 'OK' })
});

app.listen(4005, () => {
    console.log('Listening on 4005');
});