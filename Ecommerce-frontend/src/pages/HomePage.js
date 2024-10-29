import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link className="text-white text-xl font-bold" to="/">
            E-Commerce
          </Link>
          <button
            className="text-gray-400 lg:hidden focus:outline-none"
            type="button"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div
            className="hidden lg:flex lg:items-center space-x-4"
            id="navbarNav"
          >
            <Link className="text-gray-300 hover:text-white" to="/">
              Products
            </Link>
            <Link className="text-gray-300 hover:text-white" to="/cart">
              Cart
            </Link>
            <Link className="text-gray-300 hover:text-white" to="/login">
              Login
            </Link>
            <Link className="text-gray-300 hover:text-white" to="/register">
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Our E-Commerce Platform
        </h1>
        <p className="text-lg mb-8">
          Find the best products at unbeatable prices!
        </p>
        <Link
          to="/products"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Shop Now
        </Link>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-3">Wide Variety</h2>
          <p>Discover a wide range of products across different categories.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-3">Fast Shipping</h2>
          <p>Enjoy quick and reliable shipping to your doorstep.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-3">24/7 Support</h2>
          <p>Get assistance anytime with our 24/7 customer support.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} E-Commerce Platform. All rights
            reserved.
          </p>
          <div className="mt-4 space-x-6">
            <Link className="text-gray-400 hover:text-white" to="/about">
              About Us
            </Link>
            <Link className="text-gray-400 hover:text-white" to="/contact">
              Contact
            </Link>
            <Link className="text-gray-400 hover:text-white" to="/privacy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
