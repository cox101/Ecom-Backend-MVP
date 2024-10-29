import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
//import icons from "/payments.png";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* footer top */}
      <div className="max-w-screen-2xl mx-auto xl:px-28 px-4 overflow-hidden">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* company info */}
          <div className="md:w-[400px]">
            <Link to="/">
              <img src="/icons" alt="Car Shop Logo" />
            </Link>
            <p className="my-8 text-Black/75">
              Thank you for choosing AutoDeals! We're dedicated to helping you
              find the perfect car with exceptional customer service every step
              of the way.
            </p>
            <div className="flex items-center gap-6">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-indigo-500" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:text-indigo-500" />
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-indigo-500" />
              <FaInstagramSquare className="w-5 h-5 cursor-pointer hover:text-indigo-500" />
            </div>
          </div>

          {/* Catalog */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CATALOG</h4>
            <div className="space-y-2">
              <Link
                to="/category/sedans"
                className="text-sm block hover:text-indigo-500"
              >
                Sedans
              </Link>
              <Link
                to="/category/suvs"
                className="text-sm block hover:text-indigo-500"
              >
                SUVs
              </Link>
              <Link
                to="/category/trucks"
                className="text-sm block hover:text-indigo-500"
              >
                Trucks
              </Link>
              <Link
                to="/category/luxury"
                className="text-sm block hover:text-indigo-500"
              >
                Luxury Cars
              </Link>
              <Link
                to="/category/electric"
                className="text-sm block hover:text-indigo-500"
              >
                Electric Vehicles
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CUSTOMER SERVICES</h4>
            <div className="space-y-2">
              <Link
                to="/contact"
                className="text-sm block hover:text-indigo-500"
              >
                Contact Us
              </Link>
              <Link
                to="/track-order"
                className="text-sm block hover:text-indigo-500"
              >
                Track Your Order
              </Link>
              <Link
                to="/service"
                className="text-sm block hover:text-indigo-500"
              >
                Vehicle Maintenance & Repair
              </Link>
              <Link
                to="/appointments"
                className="text-sm block hover:text-indigo-500"
              >
                Schedule a Test Drive
              </Link>
              <Link
                to="/shipping-returns"
                className="text-sm block hover:text-indigo-500"
              >
                Shipping & Returns
              </Link>
            </div>
          </div>

          {/* ABOUT US */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">ABOUT US</h4>
            <div className="space-y-2">
              <Link
                to="/our-team"
                className="text-sm block hover:text-indigo-500"
              >
                Meet Our Team
              </Link>
              <Link
                to="/financing"
                className="text-sm block hover:text-indigo-500"
              >
                Financing Options
              </Link>
              <Link to="/faq" className="text-sm block hover:text-indigo-500">
                FAQ
              </Link>
              <Link to="/about" className="text-sm block hover:text-indigo-500">
                About Us
              </Link>
              <Link to="/terms" className="text-sm block hover:text-indigo-500">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="bg-indigo-800 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
        <p className="text-white text-center py-3 mt-3 mb-3">
          © {new Date().getFullYear()} AutoDeals, Inc.
        </p>
        <div className="flex items-center text-white mr-10 mt-3 mb-3">
          <p className="mr-2">Scroll to Top</p>
          <FaArrowUp className="hidden sm:block mr-20" />
        </div>
      </div>
    </footer>
  );
}
