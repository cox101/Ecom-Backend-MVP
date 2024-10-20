const express = require('express');
const router = express.Router();

// Import the product controller
const productController = require('../controllers/productController');

// Define the routes
router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);

module.exports = router;