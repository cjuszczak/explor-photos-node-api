// File: ./routes/photoAPI.js

// Require express, e
let express    = require('express');
let router     = express.Router();
let photosvc   = require('../modules/photoService');

router.get('/photos', photosvc.list);

router.post('/photos', photosvc.save);

module.exports = router;

