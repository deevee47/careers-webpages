import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  // Animation variants for the text
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInUpDelay = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
  };

  // Animation for the wave
  const waveAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.6 } },
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/xx.jpeg')`,
          filter: "brightness(60%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-20 text-center text-white px-4"
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h1 className="text-5xl font-bold mb-4" variants={fadeInUp}>
          Carrer
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xl max-w-2xl mx-auto"
          variants={fadeInUpDelay}
        >
          Get in Touch with Us! We're here to answer your questions and discuss
          how we can support your needs.
        </motion.p>
      </motion.div>

      {/* Wave shape with animation */}
      <motion.div
        className="absolute z-20 bottom-0 left-0 right-0"
        initial="hidden"
        animate="visible"
        variants={waveAnimation}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,96L60,80C120,64,240,32,360,32C480,32,600,64,720,80C840,96,960,96,1080,88C1200,80,1320,64,1380,56L1440,48L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
        </svg>
      </motion.div>
    </div>
  );
};

export default ContactUs;
