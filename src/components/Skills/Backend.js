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

const Backend = () => {
  return (
    <motion.div
      className="skills__content"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="skills__title">Deployment & Cloud Platforms</h3>
      <div className="skills__box">
        <div className="skills__group">
          {[
            { name: "AWS", level: "Basic" },
            { name: "Vercel", level: "Intermediate" },
            { name: "DigitalOcean", level: "Basic" },
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
            { name: "Firebase", level: "Basic" },
            { name: "Netlify", level: "Intermediate" },
            { name: "GitHub Pages", level: "Basic" },
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

export default Backend;
