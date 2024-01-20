import React from "react";
import './qualification.css'

const Qualification = () => {
  return (
    <section className="section qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className="qualification__button button--flex">
                <i className="uil uil-graduation-cap qualification__icon qualification__active"></i> Education
            </div>

            <div className="qualification__button button--flex">
                <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
            </div>
        </div>

        <div className="qualification__sections">
            <div className="qualification__content qualification__content-active">
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web Designer</h3>
                        <span className="qualification__subtitle">Span Institute</span>
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
                        <h3 className="qualification__title">Ark Director</h3>
                        <span className="qualification__subtitle">Span Institute</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2021 - present
                        </div>
                    </div>
                    
                </div>



                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web Development</h3>
                        <span className="qualification__subtitle">Span Institute</span>
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
                        <h3 className="qualification__title">UX Experts</h3>
                        <span className="qualification__subtitle">Span Institute</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2021 - 2018
                        </div>
                    </div>
                    
                </div>

            </div>




            <div className="qualification__content">
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Product Designer</h3>
                        <span className="qualification__subtitle">Span Institute</span>
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
                        <h3 className="qualification__title">UX Designer</h3>
                        <span className="qualification__subtitle">Span Institute</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2021 - present
                        </div>
                    </div>
                    
                </div>



                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web Development</h3>
                        <span className="qualification__subtitle">Span Institute</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2021 - present
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
