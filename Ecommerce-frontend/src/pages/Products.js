// src/components/ProductList.js
import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../constants/index";
import { fetchProducts } from "../api";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { motion } from "framer-motion"; // Import Framer Motion
// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const response = await fetch("/product.json");
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     getProducts();
//   }, []);

//   return (
//     <div className="bg-gray-100 py-10">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           Our Products
//         </h2>
//         <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {products.map((product) => (
//             <li
//               key={product._id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden"
//             >
//               <div className="p-5">
//                 <h3 className="text-xl font-semibold text-gray-700 mb-2">
//                   {product.name}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4">
//                   {product.description}
//                 </p>
//                 <p className="text-lg font-bold text-blue-500">
//                   ${product.price.toFixed(2)}
//                 </p>
//                 <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
//                   Add to Cart
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };
const Products = () => {
  return (
    <div className="container mx-auto border-b py-6 pb-10 bg-gradient-to-b from-indigo-400 to-fuchsia-300">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl text-white mb-8"
      >
        FEATURED CARS
      </motion.h2>
      <div className="max-w-screen-2xl px-20 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={index}
            className="bg-fuchsia-100 rounded-lg shadow-md overflow-hidden m-4"
            initial={{ opacity: 0, scale: 0.8 }} // Initial state
            animate={{ opacity: 1, scale: 1 }} // Final state
            transition={{ duration: 0.3, delay: index * 0.2 }} // Animation duration and delay
          >
            <Link href="#" className="block">
              <div className="p-4">
                <img
                  className="mb-4 rounded-md object-cover w-full h-48"
                  src={product.image}
                  alt={product.name}
                />
                <div className="text-center">
                  <h6 className="mb-2 mt-2 font-medium text-gray-800">
                    {product.name}
                  </h6>
                  <span className="block mb-2 mt-2 text-blue-500 font-semibold">
                    ${product.price}
                  </span>
                  <div className="mt-2 flex items-center justify-center text-yellow-400">
                    <CiStar className="w-5 h-5" />
                    <span className="text-sm ml-1">
                      {product.rating} (100 reviews)
                    </span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
