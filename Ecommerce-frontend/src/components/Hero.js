import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="bg-indigo-600 text-white py-20 h-[700px] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Section */}
        <div className="relative z-10 text-center lg:text-left lg:w-1/2 py-8 lg:py-16">
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
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 lg:pl-8">
          <img
            src="../../images/BMW_M_Series2.png"
            alt="BMW M Series"
            className="h-auto"
          />
        </div>
      </div>
    </section>
  );
}
