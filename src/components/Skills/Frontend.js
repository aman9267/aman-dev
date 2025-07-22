import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Frontend = () => {
  return (
    <motion.div
      className="skills__content"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {[
            { name: "HTML", level: "Basic" },
            { name: "Material UI", level: "Intermediate" },
            { name: "Javascript", level: "Intermediate" },
            { name: "Git & Github", level: "Intermediate" },
            { name: "Next Js", level: "Intermediate" },
          ].map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills__group">
          {[
            { name: "CSS", level: "Advance" },
            { name: "Tailwind", level: "Intermediate" },
            { name: "Typescript", level: "Intermediate" },
            { name: "React Js", level: "Intermediate" },
            { name: "Firebase", level: "Intermediate" },
          ].map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Frontend;
