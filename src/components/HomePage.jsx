import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Carousel from "./Carousel";
import EnhancedCarousel from "./EnhancedCarousel";
import CareerParallax from "./CareerParallax";

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
      <div className="relative w-full h-screen flex justify-center items-center bg-blue-50 overflow-hidden rounded-b-[200px]">
        <img
          src="/api/placeholder/1200/800"
          alt="Offshore Rig"
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        />
        <div
          className={`text-center text-white z-20 ${
            isHeroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          } transition-all duration-1500 ease-in-out`}
        >
          <h1 className="text-5xl font-bold mb-2">Your Trusted Partner In</h1>
          <h1 className="text-5xl font-bold text-sky-400 mb-4">
            Upstream Engineering
          </h1>

          <div className="flex flex-col items-center mb-4">
            <svg
              className={`w-[500px] h-5 ${
                linesVisible ? "opacity-100" : "opacity-0"
              } transition-all duration-500 ease-in-out`}
              viewBox="0 0 500 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10 Q 250 0 500 10"
                stroke="#00B3FF"
                strokeWidth="2"
                fill="transparent"
              />
            </svg>
            <svg
              className={`w-[500px] h-5 ${
                linesVisible ? "opacity-100" : "opacity-0"
              } transition-all duration-500 ease-in-out`}
              viewBox="0 0 500 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10 Q 250 0 500 10"
                stroke="#00B3FF"
                strokeWidth="2"
                fill="transparent"
              />
            </svg>
          </div>

          <p className="text-xl mb-8">
            Exploring New Horizons with Innovative Engineering Solutions
          </p>
          <div className="space-x-4">
            <button className="bg-sky-400 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-navy-900 transition-colors duration-300">
              Explore Products
            </button>
            <button className="bg-transparent text-white px-8 py-3 rounded-full text-lg border border-white hover:bg-white/20 transition-colors duration-300">
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div
        className="flex justify-center items-center h-screen bg-white -mt-32"
        ref={aboutSectionRef}
      >
        <div
          className={`flex justify-between items-start max-w-6xl w-4/5 p-10 bg-blue-50 rounded-3xl shadow-lg ${
            isAboutVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          } transition-all duration-1000 ease-in-out`}
        >
          <div className="w-3/5 mr-5">
            <h2 className="text-4xl font-bold mb-6 text-navy-900">About Us</h2>
            <p className="text-lg mb-5 leading-relaxed">
              Founded in 2022, we at Anvey are dedicated to delivering
              innovative engineering solutions. Specializing in cutting-edge
              technologies such as stimulation tools, artificial lift systems,
              well completions, gas environment packers, and maglev pumps, we
              provide customized tools that enhance operational efficiency and
              boost productivity.
            </p>
            <button className="bg-sky-400 text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-navy-900 transition-colors duration-300 mt-8">
              Contact Us
            </button>
          </div>
          <div className="w-2/5">
            <img
              src="https://images.unsplash.com/photo-1593642632883-e4e1c0f3e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDB8fGltYWdlfGVufDB8fHx8MTY5NzAxNTc5OQ&ixlib=rb-4.0.3&q=80&w=800"
              alt="About Us"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>

          <div className="flex w-[75%] mx-auto flex-col gap-32">
              <h1 className="text-5xl font-bold">| Our Services</h1>
          <EnhancedCarousel />
              <Carousel />
          </div>
          <CareerParallax />

      {/* Common Queries Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-navy-900">
            Common Queries
          </h2>
          <p className="text-xl mb-12">Your Answers to Common Questions</p>

          <div className="grid grid-cols-2 gap-8">
            {queries.map((query, index) => (
              <div key={query.id} className="text-left">
                <button
                  onClick={() => toggleQuery(index)}
                  className="w-full text-left text-lg font-semibold mb-2 flex justify-between items-center"
                >
                  <span>
                    {query.id}. {query.question}
                  </span>
                  <span>{activeIndex === index ? "▲" : "▶"}</span>
                </button>
                {activeIndex === index && (
                  <p className="mt-2 p-4 bg-gray-100 rounded-lg">
                    {query.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy-900">
            Still have doubts? Let's Get In Touch
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center w-64">
              <FaMapMarkerAlt className="text-5xl text-sky-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>Sepco Township Durgapur, WB</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center w-64">
              <FaEnvelope className="text-5xl text-sky-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>xyz@anvey.in</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center w-64">
              <FaPhoneAlt className="text-5xl text-sky-400 mb-4 mx-auto" />
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
