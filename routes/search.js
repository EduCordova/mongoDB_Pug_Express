'use strict'

const express = require('express');
const api = express.Router();
const myOptions = require('../controllers/options');

api.get('/', myOptions.getOptions);
api.get('/create', myOptions.create);
api.post('/addcat', myOptions.addcat);
api.post('/addsubcat', myOptions.addsubcat);
api.get('/buscar', myOptions.buscar);

module.exports = api;
