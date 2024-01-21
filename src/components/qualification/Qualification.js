import React, { useState } from "react";
import './qualification.css'

const Qualification = () => {


     // Use StateManager
     const [toggleState, setToggleState] = useState(0)

     const ToggleTab = (index)=>{
         setToggleState(index)
     }
     
  return (
    <section className="section qualification" id="portfolio">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className="qualification__button button--flex qualification__active" onClick={()=>{ToggleTab(0)}}>
                <i className="uil uil-graduation-cap qualification__icon"></i> Education
            </div>

            <div className="qualification__button button--flex"onClick={()=>{ToggleTab(1)}}>
                <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
            </div>
        </div>

        <div className="qualification__sections">
            <div className={toggleState === 0 ? "qualification__content qualification__content-active" : "qualification__content"}>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Freelancer</h3>
                        <span className="qualification__subtitle">At Home</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2023 - Present
                        </div>
                    </div>
                    <div>

                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>

                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>
                    <div>

                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>

                    </div>
                    <div>
                        <h3 className="qualification__title">Software Developer</h3>
                        <span className="qualification__subtitle">Drillmaps India Private Limited</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2022 - 2023
                        </div>
                    </div>
                    
                </div>



                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Frontend Developer</h3>
                        <span className="qualification__subtitle">Neptastic Creative Studio</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2021 - present
                        </div>
                    </div>
                    <div>

                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>

                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>
                    <div>

                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>

                    </div>
                    <div>
                        <h3 className="qualification__title"> Computer Instructor</h3>
                        <span className="qualification__subtitle">GGSN School</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2018 - 2019
                        </div>
                    </div>
                    
                </div>

            </div>


            <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Bachelor Of Computer</h3>
                        <span className="qualification__subtitle">Indra Gandhi University</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2021 - present
                        </div>
                    </div>
                    <div>

                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>

                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>
                    <div>

                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>

                    </div>
                    <div>
                        <h3 className="qualification__title">Intermediate</h3>
                        <span className="qualification__subtitle">DR Shyama PMIC</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2017 - 2018
                        </div>
                    </div>
                    
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">High School</h3>
                        <span className="qualification__subtitle">Sri. Tara Chandra Inter-collage</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2015 - 2017
                        </div>
                    </div>
                    <div>

                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>

                    </div>
                </div>

            </div>
        </div>


      </div>
    </section>
  );
};

export default Qualification;
