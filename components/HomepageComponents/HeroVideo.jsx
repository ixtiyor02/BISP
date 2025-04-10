import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const WatchHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/iwatchbanner.jpg"
        className="w-full h-screen"
        width={500}
        height={100}
      />

      {/* Overlay */}
      <div className="absolute z-10 inset-0 px-2 sm:px-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Timeless Elegance on Your Wrist
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-center max-w-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover our exquisite collection of watches that blend style,
          precision, and craftsmanship.
        </motion.p>
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/products/brand/apple">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
              Shop Now
            </button>
          </Link>
          <Link href="/products/brand/apple">
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300">
              View All Watches
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WatchHero;
