import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link className="text-white text-xl font-bold" to="/">
          AutoDeals Shop
        </Link>
        <button
          className="text-white-400 lg:hidden focus:outline-none"
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
          <Link
            className="text-gray-300 text-xl hover:text-white"
            to="/products"
          >
            Products
          </Link>
          {/* <Link className="text-gray-300 text-xl hover:text-white" to="/cart">
            Cart
          </Link> */}
          <Link className="text-gray-300 text-xl hover:text-white" to="/login">
            Login
          </Link>
          <Link
            className="text-gray-300 text-xl hover:text-white"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
