const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const authRoutes = require('./Routes/auth');
const productRoutes = require('./Routes/product');
const cartRoutes = require('./Routes/cart');
const orderRoutes = require('./Routes/order');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Set strictQuery before connecting
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce-backend', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit the process with failure if connection fails
  }
};

mongoose.set('strictQuery', true);

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
