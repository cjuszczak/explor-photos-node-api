// File: ./routes/photoAPI.js

// Require express, e
var express    = require('express');
var router     = express.Router();
var photosvc   = require('../modules/photoService');

router.get('/photos', photosvc.list);

router.post('/photos', photosvc.save);

module.exports = router;

