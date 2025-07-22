import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <motion.section
      className="skills section grid"
      id="skills"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 className="section__title" variants={itemVariants}>
        Skills
      </motion.h2>
      <motion.span className="section__subtitle" variants={itemVariants}>
        My Technical Level
      </motion.span>

      <motion.div
        className="skills__container container grid"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Frontend />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Backend />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
