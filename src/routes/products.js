const express = require('express');
const router = express.Router();
const path = require('path');
const productsControllers = require('../controllers/productsControllers')

router.get('/productDetail', productsControllers.productDetail)
router.get('/productCart', productsControllers.productCart )


module.exports = router;
