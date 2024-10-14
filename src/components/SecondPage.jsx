import React from "react";
import { Download } from "lucide-react";
import { services, capabilities, projects } from "../../data.js";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SecondPage = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  };

  // Use Framer Motion's useInView hook for each section
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [capabilitiesRef, capabilitiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [downloadRef, downloadInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Scroll to Services Section
  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.div
          className="relative z-10 text-center text-white"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Innovative solutions for a sustainable future
          </p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-lg py-2 px-4 rounded-full shadow-lg"
            onClick={scrollToServices}
            whileHover={{ scale: 1.05 }}
          >
            Explore Our Services
          </motion.button>
        </motion.div>
      </section>

      {/* Services Section */}
      <motion.section
        ref={servicesRef} // Use only one ref from useInView
        className="py-16 bg-white"
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Services
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            Comprehensive services tailored to your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg transition"
                variants={scaleUp}
                custom={index}
                animate={servicesInView ? "visible" : "hidden"}
              >
                <service.icon className="w-16 h-16 mb-4 text-[#00B3FF]" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="mb-4 text-gray-700">{service.description}</p>
                <ul className="list-disc list-inside text-gray-600">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Capabilities Section */}
      <motion.section
        ref={capabilitiesRef} // Use only one ref from useInView
        className="py-16 bg-[#00B3FF26]"
        initial="hidden"
        animate={capabilitiesInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Our Capabilities
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            Delivering excellence through expertise and innovation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition"
                variants={scaleUp}
                custom={index}
                animate={capabilitiesInView ? "visible" : "hidden"}
              >
                <capability.icon className="w-16 h-16 mb-4 text-[#00B3FF]" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {capability.title}
                </h3>
                <p className="mb-4 text-gray-700">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        ref={projectsRef} // Use only one ref from useInView
        className="py-16 bg-[#F8F9FA]"
        initial="hidden"
        animate={projectsInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Our Projects
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            Innovative projects for a sustainable future
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition"
                variants={scaleUp}
                custom={index}
                animate={projectsInView ? "visible" : "hidden"}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-700">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Downloads Section */}
      <motion.section
        ref={downloadRef} // Use only one ref from useInView
        className="py-16 bg-white"
        initial="hidden"
        animate={downloadInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Download
          </h2>
          <div className="bg-gray-100 rounded-lg shadow-lg p-8">
            {/* Image added here */}
            <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" // Replace with a relevant image URL
              alt="Engineering Services Catalog"
              className="w-full h-48 object-cover rounded-t-lg mb-6"
            />

            <h3 className="text-3xl font-semibold mb-4 text-gray-800">
              Engineering Services Catalog
            </h3>
            <p className="mb-4 text-gray-700">
              Download our comprehensive catalog of engineering services and
              solutions.
            </p>
            <motion.button
              className="flex items-center bg-blue-600 hover:bg-blue-700 transition duration-300 text-white py-2 px-4 rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Download className="mr-2" />
              Download Now
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default SecondPage;
