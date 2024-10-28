const express = require('express');
// Import the order controller
const orderController = require('../controllers/orderController');
const auth = require('../middleware/auth');
const router = express.Router();

// Define routes
router.get('/', orderController.getAllOrders);           // Get all orders
router.post('/', orderController.createOrder);           // Add a new order
router.put('/:id', orderController.updateOrder);         // Update an order by ID
router.delete('/:id', orderController.deleteOrder);      // Delete an order by ID

module.exports = router;
