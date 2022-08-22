const path = require('path');

const productsControllers = {
  productCart: function (req, res) {
    // const cart = path.resolve(__dirname, '../views/products/productCart.html');
    res.sendFile(path.resolve(__dirname, '../views/products/productCart.html'));
    //  res.sendFile(cart, (err) => {
    //   if (err) {
    //     res.status(500).send('It looks like something crashed...');
    //   }
    // });
  },
  productDetail: function (req, res) {
    res.sendFile(
      path.resolve(__dirname, '../views/products/productDetail.html')
    );
    // res.sendFile(details, (err) => {
    //     if (err) {
    //       res.status(500).send('It looks like something crashed...');
    //     }
    //   });
  },
  profile: '',
};

module.exports = productsControllers;
