import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import "../contact.scss"; // Import the combined CSS file

const LastPage = () => {
  const headerRef = useRef();
  const para1Ref = useRef();
  const para2Ref = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    // Add pop-up animation to heading and paragraphs on load
    const animateContent = () => {
      headerRef.current.classList.remove("hidden");
      headerRef.current.classList.add("animate-pop-up");

      para1Ref.current.classList.remove("hidden");
      para1Ref.current.classList.add("animate-pop-up");

      para2Ref.current.classList.remove("hidden");
      para2Ref.current.classList.add("animate-pop-up");
    };

    animateContent();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === emailRef.current) {
              emailRef.current.classList.add("animate-slide-in-left");
            }
            if (entry.target === phoneRef.current) {
              phoneRef.current.classList.add("animate-slide-in-left");
            }
            if (entry.target === formRef.current) {
              formRef.current.classList.add("animate-slide-in-right");
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(emailRef.current);
    observer.observe(phoneRef.current);
    observer.observe(formRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {/* Contact Us Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h1 className="heading" ref={headerRef}>
            Contact Us
          </h1>
          <p ref={para1Ref}>
            Get in touch with us! We're here to answer your questions
          </p>
          <p ref={para2Ref}>and discuss how we can support your needs.</p>
        </div>

        {/* Team Photo */}
        <div className="team-photo">
          <img src="/xx.jpeg" alt="Team" className="team-image" />
        </div>

        {/* Wavy Curve */}
        <div className="wave-container">
          <svg
            className="wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#1D3D71"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,149.3C672,160,768,192,864,186.7C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Contact Info and Form */}
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-header" ref={headerRef}>
            <h2>Contact Us For More Info About Us!</h2>
            <p>
              We'd love to hear from you! Whether you have questions, need more
              information, or want to explore partnership opportunities, feel
              free to reach out, and our team will be happy to assist.
            </p>
          </div>

          <div className="contact-info">
            <div className="contact-box email" ref={emailRef}>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <div>
                <h3>Email Address:</h3>
                <p>
                  <a href="mailto:anvey@anvey.in">anvey@anvey.in</a>
                </p>
              </div>
            </div>

            <div className="contact-box phone" ref={phoneRef}>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <div>
                <h3>Phone Numbers:</h3>
                <p>
                  <a href="tel:+9124554896">Telephone No: +91-245-54896</a>
                </p>
                <p>
                  <a href="tel:+9112587965">Mobile No: +91-125-87965</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" ref={formRef}>
          <div>
            <label>Your name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div>
            <label>Your email</label>
            <input type="email" placeholder="Your email" />
          </div>
          <div>
            <label>Subject</label>
            <input type="text" placeholder="Subject" />
          </div>
          <div>
            <label>Your message (optional)</label>
            <textarea rows="4" placeholder="Your message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Google Map Section */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.959193395854!2d77.58162287554636!3d28.450646475764543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf94deb6bc39%3A0x7ba6bedc9a2b537f!2sBennett%20University!5e0!3m2!1sen!2sin!4v1728858663465!5m2!1sen!2sin"
          className="map-iframe"
          width="1100"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LastPage;