const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const compression = require('compression');

const PORT = 3000;

const app = express();

app.use(logger('dev'));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

const MongoOpts = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/budgetdb', MongoOpts)
  .then(() => {
    app.listen(PORT, () => {
      // console.log(`App running on port ${PORT}!`);
    });
  });


// routes
app.use(require('./routes/api.js'));