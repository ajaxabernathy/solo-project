const AudioFile = require('./models/audiofilemodel');

const controller = {};

controller.test = (req, res, next) => {
    console.log('got to controller');
    return next();
}

module.exports = controller;