import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <div className="skills section grid" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />

      </div>
    </div>
  );
};

export default Skills;
