import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Carousel from "./Carousel";
import EnhancedCarousel from "./EnhancedCarousel";
import CareerParallax from "./CareerParallax";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImageAccordion from "./ImageAccordian";
import CommonQueries from "./CommonQueries";

const slideInFromLeft = {
  hidden: { x: -200 }, // Sharp slide in from the left
  visible: { x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AnimatedSection = ({ children, animation = fadeInFromBottom }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animation}
    >
      {children}
    </motion.div>
  );
};

const queries = [
  {
    id: 1,
    question: "What does Anvey specialize in?",
    answer:
      "Anvey specializes in innovative tools for the oil and gas industry.",
  },
  {
    id: 2,
    question: "What is the HymaFRAC packer, and how does it work?",
    answer:
      "The HymaFRAC packer is a specialized tool used for zonal isolation in hydraulic fracturing operations.",
  },
  {
    id: 3,
    question:
      "How does the Maglev Linear Motor Drive Plunger Pump differ from traditional plunger pumps?",
    answer:
      "It uses magnetic levitation to operate without friction, making it more efficient.",
  },
  {
    id: 4,
    question:
      "How do Anvey's artificial lift systems help improve well production?",
    answer:
      "They increase the flow of oil or gas from the well, enhancing recovery rates.",
  },
  {
    id: 5,
    question: "What makes the Juggler tool unique for wellbore cleanout?",
    answer:
      "The Juggler tool is unique due to its advanced debris removal technology.",
  },
  {
    id: 6,
    question: "What are Anvey's core values?",
    answer:
      "Anvey's core values include innovation, integrity, and customer focus.",
  },
  {
    id: 7,
    question: "How can I apply for a job at Anvey?",
    answer: "Visit the careers section on our website for job openings.",
  },
  {
    id: 8,
    question: "What is the Wellhead Bypass Tool, and when should it be used?",
    answer:
      "The Wellhead Bypass Tool is used for bypassing wellheads during critical operations.",
  },
  {
    id: 9,
    question: "How does Anvey ensure the quality of its products?",
    answer:
      "Anvey ensures quality through rigorous testing and quality control measures.",
  },
  {
    id: 10,
    question:
      "What sets Anvey apart from other companies in the oil and gas sector?",
    answer:
      "Anvey's cutting-edge technology and commitment to innovation sets it apart.",
  },
];

const HomePage = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [linesVisible, setLinesVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const aboutSectionRef = useRef(null);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeroVisible(true);
    }, 100);

    const lineTimer = setTimeout(() => {
      setLinesVisible(true);
    }, 2000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAboutVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(lineTimer);
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  const toggleQuery = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="font-montserrat">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex justify-center items-center overflow-hidden -mt-20">
        {/* Background image with semi-circle */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover rounded-b-[50%] scale-x-[1.5]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')`,
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <div
            className={`text-center text-white transition-all duration-1500 ease-in-out ${
              isHeroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-[42px] font-bold mb-2">
              Your Trusted Partner In
            </h1>
            <h1 className="text-[42px] font-bold text-sky-400 mb-4 font-yaro">
              Upstream Engineering
            </h1>

            <div className="flex flex-col items-center">
              <svg
                className={`w-[500px] h-5 transition-all duration-500 ease-in-out ${
                  linesVisible ? "stroke-animate" : ""
                }`}
                viewBox="0 0 500 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10 Q 250 0 500 10"
                  stroke="#ffffff"
                  strokeWidth="2"
                  fill="transparent"
                  className="line"
                />
              </svg>
              <svg
                className={`w-[500px] h-5 transition-all duration-500 ease-in-out mr-10 -mt-3 ${
                  linesVisible ? "stroke-animate" : ""
                }`}
                viewBox="0 0 400 20"
                fill="ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10 Q 250 0 500 10"
                  stroke="#ffffff"
                  strokeWidth="2"
                  fill="transparent"
                  className="line"
                />
              </svg>
            </div>

            <p className="text-[16px] mb-8">
              Exploring New Horizons with Innovative Engineering Solutions
            </p>
            <div className="space-x-4">
              <button className="bg-sky-400 text-[15px] font-bold text-white px-8 py-3 rounded-full text-lg hover:bg-navy-900 transition-colors duration-300">
                Explore Products
              </button>
              <Link to="/services">
                <button className="bg-transparent text-[15px] font-medium text-white px-8 py-3 rounded-full text-lg border border-white hover:bg-white/20 transition-colors duration-300">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section */}
      <div
        className="flex  justify-center items-center h-screen bg-white -mt-32 "
        ref={aboutSectionRef}
      >
        <div
          className={`flex justify-between items-start w-[80%] mt-10 p-10 bg-blue-50 rounded-3xl shadow-lg ${
            isAboutVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          } transition-all duration-1000 ease-in-out`}
        >
          <AnimatedSection animation={slideInFromLeft}>
            <div className="mr-5">
              <h2 className="text-[30px] text-[#1D3D71] font-bold mb-6 text-navy-900 font-yaro">
                About Us
              </h2>
              <p className="text-[17px] leading-[27px] font-medium mb-5 ">
                Founded in 2022, we at Anvey are dedicated to delivering
                innovative engineering solutions. Specializing in cutting-edge
                technologies such as stimulation tools, artificial lift systems,
                well completions, gas environment packers, and maglev pumps, we
                provide customized tools that enhance operational efficiency and
                boost productivity.
              </p>
              <Link to="/contact">
                <button className="bg-sky-400 text-white px-6 py-3 rounded-full text-[15px] font-bold uppercase hover:bg-navy-900 transition-colors duration-300 mt-8">
                  Contact Us
                </button>
              </Link>
            </div>
          </AnimatedSection>
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="About Us"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex w-[75%] mx-auto flex-col gap-20">
        <h1 className="text-[40px] font-bold font-yaro animate-slideInLeft text-[#1D3D71]">
          | Our Services
        </h1>
        <EnhancedCarousel />
        <Link className="mx-auto mb-10 mt-20" to="/services">
          <button className="text-white bg-blue-400 font-bold px-8 py-3 rounded-full text-lg border border-blue hover:bg-white/20 hover:text-blue-400 hover:border-blue-400 transition-colors duration-300 animate-slideInUp">
            View More
          </button>
        </Link>
      </div>

      <ImageAccordion />
      <CareerParallax />
      {/* Common Queries Section */}
      <div className="bg-white py-16">
        <div className="p-20 mx-auto text-center">
          <h2 className="text-5xl text-left font-bold mb-10 text-[#1D3D71] font-yaro">
            Common Queries
          </h2>
          <p className="text-xl text-left mb-8">
            Your Answers to Common Questions
          </p>

          <CommonQueries queries={queries} />
        </div>
      </div>
      {/* Contact Section */}
      <div className="bg-white -mt-6">
        <div className="mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy-900 font-yaro text-[#1D3D71]">
            Still have doubts? Let's Get In Touch
          </h2>
          <div className="flex justify-center space-x-16">
            <div className="bg-blue-100 p-4 px-10 rounded-[50px] w-72 shadow-lg shadow-blue-100 text-center ">
              <FaMapMarkerAlt className="text-3xl text-sky-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>Sepco Township Durgapur, WB</p>
            </div>
            <div className="bg-blue-100 p-4 px-10 rounded-[50px] w-72 shadow-lg  shadow-blue-100 text-center ">
              <FaEnvelope className="text-3xl text-sky-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>xyz@anvey.in</p>
            </div>
            <div className="bg-blue-100 p-4 px-10 rounded-[50px] w-72 shadow-lg shadow-blue-100 text-center ">
              <FaPhoneAlt className="text-3xl text-sky-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>+91 99999 99999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
