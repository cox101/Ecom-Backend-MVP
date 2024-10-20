E-commerce Backend MVP
Overview
This project is a backend system for an e-commerce platform that allows users to browse products, add items to a shopping cart, and place orders. It also features a secure authentication system to handle user registration and login.

Table of Contents
Technologies Used
Core Features
Installation
API Endpoints
Data Models
Environment Variables
Testing
Challenges
Future Improvements
Technologies Used
Node.js: JavaScript runtime for building the backend API.
Express.js: Web framework for Node.js used to create API endpoints.
MongoDB: NoSQL database for storing product details, user information, and order data.
Mongoose: ODM library for MongoDB and Node.js.
JWT (JSON Web Tokens): Used for secure user authentication.
Bcrypt.js: Used for hashing passwords securely.
dotenv: Used for managing environment variables.
Core Features
Product Management: Users can view available products with details such as name, description, price, and stock.
User Cart: Users can add, update, or remove items from their shopping cart.
Order Management: After finalizing the cart, users can place an order.
Authentication: Secure registration and login system using JWT.