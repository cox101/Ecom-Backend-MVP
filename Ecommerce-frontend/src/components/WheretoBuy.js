import React from "react";

import { motion } from "framer-motion";

export default function WhereToBuy() {
  return (
    <div className="container my-36 p-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* form section */}
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="text-4xl font-bold text-darkGrey font-serif"
          >
            Buy Our Products from Anywhere
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
            }}
            className="flex items-center gap-4"
          >
            {/* input */}
            <input
              type="text"
              placeholder="name"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="email"
              placeholder="email"
              className="input-style w-full "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
            }}
            className="flex items-center gap-4"
          >
            {/* input */}
            <input
              type="teSxt"
              placeholder="Country"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="text"
              placeholder="ZipCode"
              className="input-style w-full "
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
            }}
            className="primary-btn w-full"
          >
            Order Now
          </motion.button>
        </div>
        {/* world map section */}
        <div className="col-span-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            src="../../images/world-map.png"
            alt="worldmap"
            className="w-full sm:w-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
