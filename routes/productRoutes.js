const express = require('express')
const protect = require('../middleware/authMiddleware')

const router = express.Router();

const { createOrUpdateProducts, getProducts } = require('../controller/productController');

router.post('/createOrUpdateProducts', protect, createOrUpdateProducts)
router.get('/getProducts', getProducts)

module.exports = router