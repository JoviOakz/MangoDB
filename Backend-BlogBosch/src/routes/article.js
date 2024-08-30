const express = require('express');
const ArticleController = require('../controller/ArticleController');
const route = express.Router();

route
    .post('/create', ArticleController.create)

module.exports = route;