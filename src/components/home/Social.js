import React from "react";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Social = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/mohammad_aman_92/",
      iconClass: "uil uil-instagram",
    },
    {
      href: "https://www.youtube.com/@AmanTeach",
      iconClass: "uil uil-youtube",
    },
    {
      href: "https://github.com/aman9267",
      iconClass: "uil uil-github-alt",
    },
  ];

  return (
    <motion.div className="home__social" initial="hidden" animate="visible">
      {socialLinks.map((item, index) => (
        <motion.a
          key={index}
          className="home__social_icon"
          target="_blank"
          href={item.href}
          rel="noreferrer"
          variants={iconVariants}
          custom={index}
        >
          <i className={item.iconClass}></i>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Social;
