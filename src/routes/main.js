const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  let home = path.resolve(__dirname, '../views/index.html');

  res.sendFile(home, (err) => {
    if (err) {
      res.status(500).send('It looks like something crashed...');
    }
  });
});
