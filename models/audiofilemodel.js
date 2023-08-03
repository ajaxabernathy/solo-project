const mongoose = require('mongoose');

// const audioFileSchema = new mongoose.Schema({
//     firstName: {type: String, required: true},
//     lastName: {type: String, required: true},
//     age: {type: Number, required: true}
//   });
  
const audioFileSchema = new mongoose.Schema({
  fieldname: {type: String},
  originalname: {type: String},
  encoding: {type: String},
  mimetype: {type: String},
  destination: {type: String},
  filename: {type: String},
  path: {type: String},
  size: {type: Number}
});

  


module.exports = mongoose.model('AudioFile', audioFileSchema);