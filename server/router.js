const express = require('express');
const router = express.Router();
const ValidationError = require('./error')
const path = require('path');

// options for res.senfile
 const options = {
  root: path.join(__dirname, 'dist')
};

router.get('/', (req, res, next) => {
  var options = {
    root: "/projects/TitanWorld"
  };

  res.sendFile('main.html', options, (err) => {
    const fileName = 'index.html';
    console.log(options);
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  })
});

router.get('/main.css', (req, res, next) => {
  res.sendFile('main.css', options, (err) => {
    const fileName = 'main.css';
    console.log(options);
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  })
});

router.get('/main.js', (req, res, next) => {
  res.sendFile('main.js', options, (err) => {
    const fileName = 'main.js';
    console.log(options);
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  })
});

module.exports = router;


