require('dotenv').config();

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const route = require("./routes");
const http = require('http');

const middlewares = require('./middlewares/auth');

const PORT = process.env.PORT || 3007;
const api = express();
dotenv.config();
api.use(express.json());
api.use(cors());

api.use(middlewares.errorHandler);

const ads = [{ Message: `Liturgie api is running on Port: ${PORT}` }];

api.get('/', (req, res) => {
    res.send(ads);
});

http.createServer(api).listen(PORT);
console.info(`Listening on port ${PORT}`);
module.exports = api;