const express = require('express');
const controller = require('../controller.js')
const router = express.Router();


router.post('/', controller.test, (req, res) => {
    console.log('back to router');
    return res.status(200).json();
  });













  module.exports = router;