import React from "react";
import { motion } from "framer-motion";

const Data = () => {
  return (
    <motion.div
      className="home__data"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h1
        className="home__title"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mohd Aman{" "}
        <motion.svg
          width="36"
          height="36"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="home__hand"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
        >
          {/* SVG Paths (keep same) */}
          {/* ... */}
        </motion.svg>
      </motion.h1>

      <motion.h3
        className="home__subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Software Developer
      </motion.h3>

      <motion.p
        className="home__description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        I Am Creative Software developer with 3 year experience. I am very
        passionate and dedicated to my work.
      </motion.p>

      <motion.a
        href="#contact"
        className="button button--flex button__color"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.6 }}
      >
        Say Hello{" "}
        <svg
          className="button__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* SVG Paths (same as before) */}
          {/* ... */}
        </svg>
      </motion.a>
    </motion.div>
  );
};

export default Data;
