const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './src/views/index.html'));
});

app.get('/productCart', (req, res) => {
  res.sendFile(path.resolve(__dirname, './src/views/productCart.html'));
});

app.get('/productDetail', (req, res) => {
  let fileName = path.resolve(__dirname, './src/views/productDetail.html');

  res.sendFile(fileName, (err) => {
    if (err) {
      res.status(500).send('It looks like something crashed...');
    }
  });
});

app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, './src/views/register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './src/views/login.html'));
});

app.post('/newUser', (req, res) => {
  res.sendFile(path.resolve(__dirname, './src/views/newUser.html'));
});
