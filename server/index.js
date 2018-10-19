const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const HC = require('./house_controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connected to db')
}).catch(err => {
    console.error('Error on massive', err)
})

app.get('/api/houses', HC.getHouses);
app.post('/api/houses', HC.addHouse);
app.put('/api/houses/:id', HC.updateHouse);
app.delete('/api/houses/:id', HC.deleteHouse);

const SERVER_PORT = process.env.SERVER_PORT || 4100;
app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT} 🎃`)
})