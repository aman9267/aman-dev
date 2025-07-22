import React from "react";
import { motion } from "framer-motion";

const Scroll = () => {
  return (
    <motion.div
      className="home__scroll"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <a href="#about" className="home__scroll-button button--flex">
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 1.5,
          }}
        >
          {/* Animate the wheel line */}
          <motion.path
            className="wheel"
            d="M123.359,79.775l0,72.843"
            stroke="var(--title-color)"
            strokeWidth="20px"
            fill="none"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [0, 15, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />

          {/* Mouse outer path remains static */}
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359
            c-62.565,0 -113.359,50.794 -113.359,113.359v143.237c0,62.565
            50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794
            113.358,-113.359v-143.237Z"
            stroke="var(--title-color)"
            strokeWidth="20px"
            fill="none"
          />
        </svg>

        <span className="home__scroll-name">Scroll Down</span>

        {/* Animate arrow bounce */}
        <motion.i
          className="uil uil-arrow-down home__scroll-arrow"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.i>
      </a>
    </motion.div>
  );
};

export default Scroll;
