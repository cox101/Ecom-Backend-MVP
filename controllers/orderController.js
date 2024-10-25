const Order = require('../models/Orders');
const Cart = require('../models/Cart');

exports.placeOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.userId });
    if (!cart) return res.status(400).json({ message: 'No items in cart' });

    const totalPrice = cart.products.reduce((total, product) => total + product.quantity * product.productId.price, 0);
    const order = new Order({ userId: req.userId, products: cart.products, totalPrice });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
