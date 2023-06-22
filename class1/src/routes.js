const express = require('express')
const routes = express.Router();
const User = require('./User')
routes.use('/auth', User);

module.exports = routes;
