const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());


const SERVER_PORT = process.env.SERVERPORT || 4100;
app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT} 🎃`)
})