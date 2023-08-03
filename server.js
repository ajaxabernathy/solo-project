const express = require('express');
const path = require('path')
const app = express();

const mongoose = require('mongoose');

const multer = require('multer'); 

const api = require(path.join(__dirname, './routes/api.js'));

const PORT = 3000;

app.use(express.json());

// connect to database
mongoose.connect(
  'mongodb+srv://ajaxabernathy:Sound223!@cluster69.zlgyrqh.mongodb.net/',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

//database model for new audio file upload
const Audio = mongoose.model


// route handlers
app.use('/api', api);









// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// module.exports = app;