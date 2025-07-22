import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Imag from "../../assest/p.png";
import imag2 from "../../assest/p2.png";
import imag3 from "../../assest/p3.png";
import imag4 from "../../assest/p4.png";
import imag5 from "../../assest/p5.png";
import imag6 from "../../assest/p6.png";
import "./project.css";

const Project = () => {
  const [toggle, settoggle] = useState(0);
  const [category, setCategory] = useState("App");

  const ToggleTabs = (i) => {
    settoggle(i);
    if (i === 0) setCategory("App");
    else if (i === 1) setCategory("Desktop");
    else if (i === 2) setCategory("Games");
    else if (i === 3) setCategory("Static Website");
  };

  const ProjectData = [
    {
      id: 1,
      title: "Simple E-commerce Template",
      category: "Static Website",
      imag: Imag,
      projectSubtitle: "Click To View",
      href: "https://multishopping.netlify.app/home",
    },
    {
      id: 2,
      title: "E-commerce Bootstrap",
      category: "Static Website",
      imag: imag5,
      projectSubtitle: "Click To View",
      href: "https://greenfreshgrocery.netlify.app/",
    },
    {
      id: 3,
      title: "Simple Website Photographic",
      category: "Games",
      imag: imag4,
      projectSubtitle: "Click To View",
      href: "https://dkphotographer.netlify.app/",
    },
    {
      id: 4,
      title: "Image Frame In JavaScript",
      category: "Desktop",
      imag: imag3,
      projectSubtitle: "Click To View",
      href: "https://html-css-canvas.netlify.app/",
    },
    {
      id: 5,
      title: "Simple E-commerce Template",
      category: "Games",
      imag: Imag,
      projectSubtitle: "Click To View",
      href: "https://multishopping.netlify.app/home",
    },
    {
      id: 6,
      title: "Simple Website Photographic",
      category: "Static Website",
      imag: imag4,
      projectSubtitle: "Click To View",
      href: "https://dkphotographer.netlify.app/",
    },
    {
      id: 7,
      title: "Restaurant Landing Page",
      category: "App",
      imag: imag6,
      projectSubtitle: "Click To View",
      href: "https://fooodzone.netlify.app/",
    },
    {
      id: 8,
      title: "E-commerce Bootstrap",
      category: "App",
      imag: imag5,
      projectSubtitle: "Click To View",
      href: "https://greenfreshgrocery.netlify.app/",
    },
    {
      id: 9,
      title: "Chess Board",
      category: "App",
      imag: imag2,
      projectSubtitle: "Click to View",
      href: "https://customchess-4.netlify.app/",
    },
    {
      id: 10,
      title: "Chess Board",
      category: "Games",
      imag: imag2,
      projectSubtitle: "Click to View",
      href: "https://customchess-4.netlify.app/",
    },
    {
      id: 11,
      title: "Simple Website Photographic",
      category: "Desktop",
      imag: imag4,
      projectSubtitle: "Click to View",
      href: "https://dkphotographer.netlify.app/",
    },
    {
      id: 12,
      title: "Chess Board",
      category: "Desktop",
      imag: imag2,
      projectSubtitle: "Click to View",
      href: "https://multishopping.netlify.app/home",
    },
    {
      id: 12,
      title: "Restaurant Landing Page",
      category: "Static Website",
      imag: imag6,
      projectSubtitle: "Click to View",
      href: "https://fooodzone.netlify.app/",
    },
  ];
  const filteredProjects = ProjectData.filter((p) => p.category === category);

  return (
    <motion.section
      className="section project"
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section__title">Completed Projects</h2>
      <span className="section__subtitle">My individual project</span>

      {/* Tabs */}
      <div className="project__container grid">
        <div className="project__content">
          <div className="project__category text-color-white">
            {["App", "Desktop", "Games", "Static Website"].map((name, i) => (
              <button
                key={name}
                className={
                  toggle === i
                    ? "projects__button project__button-active"
                    : "projects__button"
                }
                onClick={() => ToggleTabs(i)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Cards */}
      <div className="project__container-card">
        <AnimatePresence mode="wait">
          {filteredProjects.map((p, index) => (
            <motion.div
              key={p.id}
              className="card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img src={p.imag} alt={p.title} />
              <div className="container">
                <h4>
                  <b>{p.title}</b>
                </h4>
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  {p.projectSubtitle}
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Project;
