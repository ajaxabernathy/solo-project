const express = require('express');
const controller = require('../controller.js')
const router = express.Router();
const multer  = require('multer');

const AudioFile = require('../models/audiofilemodel');

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
})

const upload = multer({ storage });

router.post('/', upload.single('file'), (req, res, next) => {
  console.log('audio file uploader')
  AudioFile.create(req.file)
  return res.status(200).json();
  // req.body will hold the text fields, if there were any
})    


router.get('/', controller.getAudioFiles, (req, res) => {
    console.log('back to router from getAudioFile');
    return res.status(200).json(res.locals.file);
  });










  module.exports = router;