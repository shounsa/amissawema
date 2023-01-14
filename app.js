require('dotenv').config();

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const route = require("./routes");
const http = require('http');
const path = require('path');

const middlewares = require('./middlewares/auth');

const PORT = process.env.PORT || 3007;
const api = express();
dotenv.config();
api.use(express.json());
api.use(cors());

api.use(middlewares.errorHandler);
api.use(express.static('public'));

const ads = [{ Message: `Amissa Wema api is running on Port: ${PORT}` }];

api.get('/', (req, res) => {
    res.send(ads);
});

api.get('/new', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

http.createServer(api).listen(PORT);
console.info(`Listening on port ${PORT}`);
module.exports = api;