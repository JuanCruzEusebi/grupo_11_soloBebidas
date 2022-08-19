const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/register', (req, res) => {
  let register = path.resolve(__dirname, '../views/register.html');

  res.sendFile(register, (err) => {
    if (err) {
      res.status(500).send('It looks like something crashed...');
    }
  });
});

router.get('/login', (req, res) => {
  let login = path.resolve(__dirname, '../views/login.html');

  res.sendFile(login, (err) => {
    if (err) {
      res.status(500).send('It looks like something crashed...');
    }
  });
});

router.post('/newUser', (req, res) => {
  let newUser = path.resolve(__dirname, '../views/newUser.html');

  res.sendFile(newUser, (err) => {
    if (err) {
      res.status(500).send('It looks like something crashed...');
    }
  });
});
