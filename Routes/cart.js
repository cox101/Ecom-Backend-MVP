const express = require('express');
const { addToCart, getCart } = require('../controllers/cartController');
const auth = require('../middleware/auth');
const router = express.Router();

// Import the cart controller
const cartController = require('../controllers/cartController');

// Define routes
router.post('/', auth, addToCart);
router.get('/', auth, getCart);
router.get('/:userId', cartController.getCart);             // Get cart items by user ID
router.post('/', cartController.addToCart);                 // Add an item to the cart
router.put('/:userId', cartController.updateCartItem);      // Update item quantity in cart
router.delete('/:userId/:productId', cartController.deleteCartItem); // Delete an item from cart by product ID

module.exports = router;
