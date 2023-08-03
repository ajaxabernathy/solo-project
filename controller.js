const express = require('express');
const AudioFile = require('./models/audiofilemodel');



const controller = {};


controller.getAudioFiles = async function(req, res, next) {
    console.log('got to controller');
    const foundFile = AudioFile.findOne({filename: "Cabasa Verb MPC2000.wav"});
    await foundFile;
    res.locals.file = foundFile;
    console.log(res.locals.file)
    return next();
}

module.exports = controller;