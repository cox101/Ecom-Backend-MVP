const express = require('express');
const { placeOrder } = require('../controllers/orderController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, placeOrder);

module.exports = router;
