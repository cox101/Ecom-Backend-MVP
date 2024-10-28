const express = require('express');
const router = express.Router();

// Import the product controller
const productController = require('../controllers/productController');

// Defines the routes
router.get('/', productController.getAllProducts);       // Get all products
router.post('/', productController.createProduct);       // Add a new product
router.put('/:id', productController.updateProduct);     // Update a product by ID
router.delete('/:id', productController.deleteProduct);  // Delete a product by ID

module.exports = router;