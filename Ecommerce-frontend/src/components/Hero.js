import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="bg-indigo-600 text-white py-20 h-[700px] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1,
          }}
          className="relative z-10 text-center lg:text-left lg:w-1/2 py-8 lg:py-16"
        >
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
        </motion.div>

        {/* Image Section */}
        <div className="lg:w-1/2 lg:pl-8">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            src="../../images/BMW_M_Series2.png"
            alt="BMW M Series"
            className="h-auto"
          />
        </div>
      </div>
    </section>
  );
}
