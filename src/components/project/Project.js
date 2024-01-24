import React, { useState } from "react";
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
    console.log("Toggling toggle");
    settoggle(i);
    if (i === 0) {
      setCategory("App");
    } else if (i === 1) {
      setCategory("Desktop");
    } else if (i === 2) {
      setCategory("Games");
    } else if (i === 3) {
      setCategory("Static Website");
    }
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

  const filteredProjects = ProjectData.filter((p) => {
    return p.category === category;
  });

  return (
    <section className="section project">
      <h2 className="section__title">Completed Projects</h2>
      <span className="section__subtitle">My individual project</span>
      <div className="project__container grid">
        <div className="project__content">
          <div className="project__category">
            <button
              className={
                toggle === 0
                  ? "projects__button project__button-active"
                  : "projects__button"
              }
              onClick={() => {
                ToggleTabs(0);
              }}
            >
              App
            </button>
            <button
              className={
                toggle === 1
                  ? "projects__button project__button-active"
                  : "projects__button"
              }
              onClick={() => {
                ToggleTabs(1);
              }}
            >
              Desktop
            </button>
            <button
              className={
                toggle === 2
                  ? "projects__button project__button-active"
                  : "projects__button"
              }
              onClick={() => {
                ToggleTabs(2);
              }}
            >
              Games
            </button>
            <button
              className={
                toggle === 3
                  ? "projects__button project__button-active"
                  : "projects__button"
              }
              onClick={() => {
                ToggleTabs(3);
              }}
            >
              Static Website
            </button>
          </div>
        </div>
      </div>
      <div className="project__container-card">
        {filteredProjects.map((p, index) => {
          return (
            <div class="card">
              <img src={p.imag} alt="Avatar" />
              <div class="container">
                <h4>
                  <b>{p.title}</b>
                </h4>
                <a href={p.href} >{p.projectSubtitle}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
