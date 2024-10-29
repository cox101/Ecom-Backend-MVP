import { FaCarAlt } from "react-icons/fa";
import { GiShipBow } from "react-icons/gi";
import { FcCustomerSupport } from "react-icons/fc";
import { MdAttachMoney } from "react-icons/md";
import { LiaCarSideSolid } from "react-icons/lia";
import { GiMechanicGarage } from "react-icons/gi";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4, //delay  btn animations
    },
  },
};
export default function Features() {
  return (
    <section className=" max-w-screen-2xl px-20 py-20 grid gap-12 md:grid-cols-3 mb-5 overflow-hidden mt-8">
      {/* Wide Variety of Cars */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="bg-white p-6 rounded-lg border border-indigo-500 text-center flex flex-col items-center gap-10"
        style={{
          boxShadow: "0 4px 10px rgba(75, 0, 130, 0.5)", // Indigo shadow color
        }}
      >
        <FaCarAlt className="w-16 h-16 mb-2" />
        <h2 className="text-2xl font-semibold mb-3">Wide Selection of Cars</h2>
        <p>
          Choose from sedans, SUVs, trucks, and luxury cars from top brands.
        </p>
      </motion.div>

      {/* Fast and Secure Shipping */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="bg-white p-6 rounded-lg shadow-lg  text-center flex flex-col items-center gap-10"
        style={{
          boxShadow: "0 4px 10px rgba(75, 0, 130, 0.5)", // Indigo shadow color
        }}
      >
        <GiShipBow className="w-16 h-16 mb-4" />
        <h2 className="text-2xl font-semibold mb-3">Fast & Secure Delivery</h2>
        <p>
          Get your dream car delivered to your doorstep safely and promptly.
        </p>
      </motion.div>

      {/* 24/7 Customer Support */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center gap-10"
        style={{
          boxShadow: "0 4px 10px rgba(75, 0, 130, 0.5)", // Indigo shadow color
        }}
      >
        <FcCustomerSupport className="w-16 h-16 mb-4" />
        <h2 className="text-2xl font-semibold mb-3">24/7 Customer Support</h2>
        <p>
          Our team is here to answer all your questions any time of the day.
        </p>
      </motion.div>

      {/* Flexible Financing Options */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center gap-10"
        style={{
          boxShadow: "0 4px 10px rgba(75, 0, 130, 0.5)", // Indigo shadow color
        }}
      >
        <MdAttachMoney className="w-16 h-16 mb-4" />
        <h2 className="text-2xl font-semibold mb-3">Flexible Financing</h2>
        <p>
          Explore financing options that make it easy to own your dream car.
        </p>
      </motion.div>

      {/* Certified Pre-Owned Vehicles */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center gap-10"
        style={{
          boxShadow: "0 4px 10px rgba(75, 0, 130, 0.5)", // Indigo shadow color
        }}
      >
        <LiaCarSideSolid className="w-16 h-16 mb-4" />
        <h2 className="text-2xl font-semibold mb-3">Certified Pre-Owned</h2>
        <p>
          Shop with confidence with our certified, pre-owned car selections.
        </p>
      </motion.div>

      {/* Extended Warranty and Maintenance */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center gap-10"
        style={{
          boxShadow: "0 4px 10px rgba(75, 0, 130, 0.5)", // Indigo shadow color
        }}
      >
        <GiMechanicGarage className="w-16 h-16 mb-4" />
        <h2 className="text-2xl font-semibold mb-3">Warranty & Maintenance</h2>
        <p>Enjoy extended warranties and affordable maintenance packages.</p>
      </motion.div>
    </section>
  );
}
