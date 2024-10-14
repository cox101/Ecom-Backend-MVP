const Cart = require('../models/Carts');

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId: req.userId });
    if (!cart) {
      cart = new Cart({ userId: req.userId, products: [] });
    }
    cart.products.push({ productId, quantity });
    await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.userId }).populate('products.productId');
    res.json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

