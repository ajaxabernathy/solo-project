const mongoose = require('mongoose');

const audioFileSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true}
  });
  
  


module.exports = mongoose.model('AudioFile', audioFileSchema);