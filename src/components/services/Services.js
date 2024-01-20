import React, { useState } from "react";
import "./services.css";
const Services = () => {

    // Use StateManager
        const [toggleState, setToggleState] = useState(0)

        const ToggleTab = (index)=>{
            setToggleState(index)
        }
  return (
    <section className="services section " id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className="service__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Products <br />
              Designer
            </h3>
          </div>
          <span className="services__button" onClick={()=>{ToggleTab(1)}}>
            View More
            <i className="uil uil-arrow-right services__button-icon "></i>
          </span>
          <div className={toggleState === 1 ? 'services__model active__model' : "services__model"}>
            <div className='services__model-content'>
              <i className="uil uil-times services__model-close" onClick={()=>{ToggleTab(0)}}></i>
              <h3 className="services__model-title">Products Designer</h3>
              <p className="services__model-description">
                Services with more then 2 year experiance. provide quality work
                to clint and companies
              </p>
              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I developed the User Interface
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Web Page Development</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I create ux element interactions
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              UI/Ux <br /> Designer
            </h3>
          </div>
          <span className="services__button" onClick={()=>{ToggleTab(2)}}>
            View More
            <i className="uil uil-arrow-right services__button-icon "></i>
          </span>
          <div className={toggleState === 2 ? "services__model active__model" :"services__model"}>
            <div className="services__model-content">
              <i className="uil uil-times services__model-close" onClick={()=>{ToggleTab(0)}}></i>
              <h3 className="services__model-title">Ui/Ux Designer</h3>
              <p className="services__model-description">
                Services with more then 2 year experiance. provide quality work
                to clint and companies
              </p>
              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I developed the User Interface
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Web Page Development</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I create ux element interactions
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Visual <br /> Designer
            </h3>
          </div>
          <span className="services__button"  onClick={()=>{ToggleTab(3)}}>
            View More
            <i className="uil uil-arrow-right services__button-icon "></i>
          </span>
          <div className={toggleState === 3 ? "services__model active__model" : "services__model"}>
            <div className="services__model-content">
              <i className="uil uil-times services__model-close" onClick={()=>{ToggleTab(0)}}></i>
              <h3 className="services__model-title">Visual Designer</h3>
              <p className="services__model-description">
                Services with more then 2 year experiance. provide quality work
                to clint and companies
              </p>
              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I developed the User Interface
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Web Page Development</p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I create ux element interactions
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
