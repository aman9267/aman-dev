import React from "react";
import { motion } from "framer-motion";

const boxVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Info = () => {
  const infoList = [
    {
      icon: "bx bx-award about__icon",
      title: "Experience",
      subtitle: "3 Years working",
    },
    {
      icon: "bx bx-briefcase-alt about__icon",
      title: "Completed",
      subtitle: "30+ Projects",
    },
    {
      icon: "bx bx-support about__icon",
      title: "Supports",
      subtitle: "Online 24/7",
    },
  ];

  return (
    <motion.div
      className="about__info grid"
      initial="hidden"
      animate="visible"
    >
      {infoList.map((item, index) => (
        <motion.div
          key={index}
          className="about__box"
          variants={boxVariant}
          custom={index}
        >
          <i className={item.icon}></i>
          <h3 className="box__title">{item.title}</h3>
          <span className="about__subtitle">{item.subtitle}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Info;
