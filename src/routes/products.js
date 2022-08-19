const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/productCart', (req, res) => {
  let cart = path.resolve(__dirname, '../views/productCart.html');

  res.sendFile(cart, (err) => {
    if (err) {
      res.status(500).send('It looks like something crashed...');
    }
  });
});

router.get('/productDetail', (req, res) => {
  let details = path.resolve(__dirname, '../views/productDetail.html');

  res.sendFile(details, (err) => {
    if (err) {
      res.status(500).send('It looks like something crashed...');
    }
  });
});
