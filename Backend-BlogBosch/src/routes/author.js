const express = require('express');
const AuthorController = require('../controller/AuthorController');
const route = express.Router();

route
    .post('/create', AuthorController.create)
    .post('/:id', AuthorController.getAuthor)

module.exports = route;