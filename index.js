const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router/routes.js');
const app = express();

app.use(bodyParser.json())

app.use('/', router)

module.exports = app;
