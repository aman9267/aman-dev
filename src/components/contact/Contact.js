import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import './contact.css';

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2jz5qf1', 'template_j3ha5fe', form.current, '3SQxgAw5EXmlLmpEW')
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message!");
        }
      );
  };

  return (
    <section className="section contact" id="contact">
      <h2 className="section__title" data-aos="fade-down">Get In Touch</h2>
      <span className="section__subtitle" data-aos="fade-down">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content" data-aos="fade-right">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            {/* Email */}
            <div className="contact__card">
              <i className="bx bx-mail-send contact_card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">mohd.aman9267@gmail.com</span>
              <a href="mailto:mohd.aman9267@gmail.com" className="contact__button">
                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact_card-icon"></i>
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+91 9267900106</span>
              <a href="https://wa.me/9267900106" className="contact__button">
                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* Instagram */}
            <div className="contact__card">
              <i className="bx bxl-instagram contact_card-icon"></i>
              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">mohammad_aman_92</span>
              <a href="https://ig.me/m/mohammad_aman_92" className="contact__button">
                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content contact__input__content" data-aos="fade-left">
          <h3 className="contact__title">Write Your Project</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input type="text" name="name" className="contact__form-input" placeholder="Insert Your Name" required />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input type="email" name="email" className="contact__form-input" placeholder="Insert your email" required />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea name="project" className="contact__form-input" placeholder="Write Your project" cols="30" rows="10" required />
            </div>

            <button className="button button--flex" type="submit">
              Send Message
              <svg className="button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  d="M14.2199 21.9352C13.0399..."
                  fill="var(--container-color)"
                />
                <path
                  d="M10.11 14.7052..."
                  fill="var(--container-color)"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
