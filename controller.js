const express = require('express');
const AudioFile = require('./models/audiofilemodel');



const controller = {};


controller.getAudioFiles = async function(req, res, next) {
    console.log('got to controller');
    const foundFiles = await AudioFile.find();
    res.locals.file = foundFiles;
    return next();
}

module.exports = controller;