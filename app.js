const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const usersRoutes = require('./src/routes/users');
const mainRoutes = require('./src/routes/main');
const productRoutes = require('./src/routes/products')

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

//main routes --------------------------

app.use('/', mainRoutes);

// Product routes -----------------------


app.use('/', productRoutes)
app.use('/', productRoutes)


// user routes ----------------------------------

app.use('/', usersRoutes)

app.use('/', usersRoutes)

app.post('/newUser', (req, res) => {
  res.sendFile(path.resolve(__dirname, './src/views/newUser.html'));
});

