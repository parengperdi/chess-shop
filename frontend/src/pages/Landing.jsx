import React from "react";
import Navbar from "../components/NavBar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <h1 className="font-bold text-center text-xl mt-3 text-black">
        Like a pawn♟️, you can become anything if you keep moving forward.
      </h1> */}
      <section className="h-[45vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Subtle grid / pattern */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-6 relative z-10 -mt-20"
        >
          {/* Tagline */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Elevate Your Chess Game
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Premium boards, timeless pieces, and accessories designed for
            players who think ahead.
          </p>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/products"
              className="px-6 py-3 rounded-xl bg-black text-white text-lg font-medium hover:bg-gray-800 transition"
            >
              Shop Now
            </Link>
          </motion.div>
        </motion.div>
      </section>
      {/* <h1 className="font-bold text-center text-xl mt-3 text-black">
        Like a pawn♟️, you can become anything if you keep moving forward.
      </h1>
      <h1 className="font-bold text-center text-xl mt-3 text-black">
        Like a pawn♟️, you can become anything if you keep moving forward.
      </h1>
      <h1 className="font-bold text-center text-xl mt-3 text-black">
        Like a pawn♟️, you can become anything if you keep moving forward.
      </h1> */}
    </div>
  );
};

export default Landing;
