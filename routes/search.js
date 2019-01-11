'use strict'

const express = require('express');
const api = express.Router();
const myOptions = require('../controllers/options');

api.get('/', myOptions.getOptions);
api.get('/create', myOptions.create);
api.post('/addcat', myOptions.addcat);
api.post('/addsubcat', myOptions.addsubcat);
api.get('/buscar', myOptions.buscar);
api.get('/image', myOptions.crop);
api.post('/saveimg', (req, res) => {
  var myb = req.body;
  console.log(myb);
  
  res.send( myb)
});
module.exports = api;
