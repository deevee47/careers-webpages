import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <div>
      {/* Landing Section */}
      <div className="relative w-full h-screen flex justify-center items-center bg-blue-50 overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Offshore Rig"
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10 }}
        />
        <motion.div
          className="relative z-20 text-center text-white px-4"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
        </motion.div>
      </div>

      {/* About Us Section */}
      <AnimatedSection>
        <div className="w-full py-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="md:w-1/2 text-left mr-10">
              <h2 className="text-4xl font-bold mb-4 text-[#1D3D71]">
                About Us
              </h2>
              <p className="text-lg mb-6">
                Redefining Energy Solutions with Expertise and Innovation.{" "}
                <br />
                Since our founding in 2022, Anvey Industries Pvt. Ltd. has been
                dedicated to revolutionizing the oil and gas industry. With a
                focus on advanced technologies and energy-efficient strategies,
                we provide tailored solutions that enhance operations, reduce
                costs, and drive sustainable growth for our clients worldwide.
              </p>
              <motion.button
                className="bg-[#1D3D71] text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
                whileHover={{ scale: 1.05, backgroundColor: "#14274E" }}
                whileTap={{ scale: 0.95 }}
              >
                About Us
              </motion.button>
            </div>
            <motion.div
              className="md:w-1/2 mt-8 md:mt-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Oil Rig"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Pillars of Success Section */}
      <AnimatedSection>
        <div className="w-full py-20">
          <div className="max-w-7xl mx-auto text-center text-black px-4">
            <h2 className="text-4xl font-bold mb-8">
              The Pillars of Our Success
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
              variants={staggerChildren}
            >
              {[
                "Innovation & Technology",
                "Sustainability & Efficiency",
                "Client-Centric Solutions",
              ].map((title, index) => (
                <motion.div
                  key={index}
                  className="bg-[#00B3FF26] text-black p-6 rounded-lg shadow-lg"
                  variants={fadeIn}
                  whileHover={{ scale: 1.05, backgroundColor: "#00B3FF40" }}
                >
                  <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin consequat, risus vitae scelerisque tincidunt.
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Expert Section */}
      <AnimatedSection>
        <div className="w-full bg-[#1D3D71] py-20">
          <div className="max-w-7xl mx-auto text-center text-white px-4">
            <h2 className="text-4xl font-bold mb-8">
              Listen What Our Experts Have To Say
            </h2>
            <motion.img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Vision"
              className="rounded-lg shadow-lg mb-6 w-full md:w-3/4 mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection>
        <div className="w-full py-20">
          <div className="max-w-7xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-12 text-[#1D3D71]">
              Meet Our Team
            </h2>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={staggerChildren}
            >
              {[
                {
                  name: "Jade Buckner",
                  role: "CEO",
                  img: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  name: "Cody Fisher",
                  role: "Technician",
                  img: "https://randomuser.me/api/portraits/men/44.jpg",
                },
                {
                  name: "Kathryn Murphy",
                  role: "Engineer",
                  img: "https://randomuser.me/api/portraits/women/45.jpg",
                },
                {
                  name: "Darrell Steward",
                  role: "Employee",
                  img: "https://randomuser.me/api/portraits/men/45.jpg",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  variants={fadeIn}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mb-4 shadow-lg"
                  />
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection>
        <div className="w-full bg-[#1D3D71] py-20">
          <div className="max-w-7xl mx-auto text-center text-white px-4">
            <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerChildren}
            >
              {[
                "Joseph from Denmark",
                "Jade from USA",
                "Xin Paul from Singapore",
              ].map((client, index) => (
                <motion.div
                  key={index}
                  className="bg-[#00B3FF26] text-white p-6 rounded-lg shadow-lg"
                  variants={fadeIn}
                  whileHover={{ scale: 1.05, backgroundColor: "#00B3FF40" }}
                >
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin consequat, risus vitae scelerisque tincidunt, purus
                    turpis cursus erat, vel faucibus ligula lorem nec lectus."
                  </p>
                  <p className="mt-4 font-semibold">{client}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;
