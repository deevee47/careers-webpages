import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const slideInFromLeft = {
  hidden: { x: -200 }, // Sharp slide in from the left
  visible: { x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const slideInFromTop = {
  hidden: { y: -300 }, // Sharp slide in from the left
  visible: { x: 0, transition: { duration: 1.5} },
};
const slideInFromBottom = {
  hidden: { y: 40 }, // Sharp slide in from the left
  visible: { y: 0, transition: { duration: 0.5} },
};

const fadeIn = {
  hidden: { opacity: 0, y: 50 }, // Sharp slide in from the left
  visible: { x: 0, opacity:1, transition: { duration: 1.0 } },
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn3D = {
  hidden: { opacity: 1, scale: 2.5, z: 200 },
  visible: {
    opacity: 1,
    scale: 1,
    z: 0,
    transition: { duration: 0.8 },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
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

const About = () => {
  return (
    <div className="font-montserrat">
      {/* Landing Section */}
      <div className="relative mx-auto w-full py-40 flex justify-center items-center bg-blue-50 overflow-hidden rounded-b-[200px] ">

          <img
            src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            alt="Offshore Rig"
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
          />

        <motion.div
          className="relative z-20 text-center text-white px-4"
          variants={fadeInFromBottom}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-5xl font-bold mb-4 font-yaro">About Us</h1>
          <h3 className="text-xl w-[50%] mx-auto mb-4">
            Explore our journey and mission as industry leaders, committed to
            transforming the oil and gas sector with innovative solutions.
          </h3>
        </motion.div>
      </div>

      {/* About Us Section */}

      <div className="w-full py-20">
        <div className=" mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <AnimatedSection animation={slideInFromLeft}>
            <motion.div
              className=" ml-28 md:w-1/2 text-left mr-10"
              variants={slideInFromLeft} // Straight slide from left
            >
              <h2 className="text-4xl font-bold mb-4 underline-title-left text-[#1D3D71] font-yaro">
                About Us
              </h2>
              <h2 className="text-xl mb-4 text-[#1D3D71]">
                Redefining Energy Solutions with Expertise and Innovation.{" "}
              </h2>
              <p className="text-lg mb-6">
                <br />
                Since our founding in 2022, Anvey Industries Pvt. Ltd. has been
                dedicated to revolutionizing the oil and gas industry. With a
                focus on advanced technologies and energy-efficient strategies,
                we provide tailored solutions that enhance operations, reduce
                costs, and drive sustainable growth for our clients worldwide.
              </p>
              <motion.button
                className="bg-[#1D3D71] text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 "
                whileHover={{ scale: 1.05, backgroundColor: "#14274E" }}
                whileTap={{ scale: 0.95 }}
              >
                ABOUT US
              </motion.button>
            </motion.div>
          </AnimatedSection>
          <div className="w-full mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Oil Rig"
              className="rounded-lg shadow-lg w-[80%]"
            />
          </div>
        </div>
      </div>

      {/* Pillars of Success Section */}
      <AnimatedSection>
        <div className="w-full py-20">
          <div className="max-w-7xl mx-auto text-center text-black px-4">
            <h2 className="text-4xl font-bold underline-title mb-8 font-yaro">
              The Pillars of Our Success
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
              variants={staggerChildren}
            >
              <motion.div
                className="bg-[#00B3FF26] text-black p-6 rounded-lg shadow-lg"
                variants={slideInFromLeft} // Left card slides in from the left
                whileHover={{ scale: 1.05, backgroundColor: "#00B3FF40" }}
              >
                <h3 className="text-2xl font-semibold mb-4 ">
                  Innovation & Technology
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  consequat, risus vitae scelerisque tincidunt.
                </p>
              </motion.div>
              <motion.div
                className="bg-[#00B3FF26] text-black p-6 rounded-lg shadow-lg"
                variants={fadeInFromBottom} // Middle card slides in from bottom
                whileHover={{ scale: 1.05, backgroundColor: "#00B3FF40" }}
              >
                <h3 className="text-2xl font-semibold mb-4 ">
                  Sustainability & Efficiency
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  consequat, risus vitae scelerisque tincidunt.
                </p>
              </motion.div>
              <motion.div
                className="bg-[#00B3FF26] text-black p-6 rounded-lg shadow-lg"
                variants={fadeInFromRight} // Right card slides in from the right
                whileHover={{ scale: 1.05, backgroundColor: "#00B3FF40" }}
              >
                <h3 className="text-2xl font-semibold mb-4 ">
                  Client-Centric Solutions
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  consequat, risus vitae scelerisque tincidunt.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Expert Section */}

      <div className="w-full pb-[30vw] pt-10 mb-72 bg-[#1D3D71]">
        <div className="max-w-7xl mx-auto text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-8 font-yaro">
            Listen What Our Experts Have To Say
          </h2>
          <AnimatedSection animation={fadeIn3D}>
            <motion.video
              src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your desired video URL
              alt="Vision"
              className="rounded-lg shadow-lg mb-6 w-[80vw] mx-auto absolute"
              initial="hidden"
              animate="visible"
              autoPlay
              loop
              muted
            />
          </AnimatedSection>
        </div>
      </div>

      {/* Team Section */}
      <AnimatedSection>
        <div className="w-full py-20">
          <div className="max-w-7xl mx-auto text-center px-4">
            <AnimatedSection variants={slideInFromTop}>
              <h2 className="text-4xl font-bold mb-12 underline-title text-[#1D3D71] font-yaro">
                Meet Our Team
              </h2>
            </AnimatedSection>
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
                  name: "John Smith",
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
                <AnimatedSection animation={fadeIn3D}>
                  <motion.div
                    key={index}
                    className="flex flex-col items-center py-14 rounded-[40%] transition-colors duration-300 hover:bg-blue-100"
                    variants={fadeInFromBottom}
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-40 h-40 rounded-full mb-4 shadow-lg"
                    />
                    <h3 className="text-lg">{member.name}</h3>
                    <p className="text-sm">{member.role}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <div className="w-full bg-[#1D3D71] py-20">
        <div className="max-w-7xl mx-auto text-center text-white px-4">
          <AnimatedSection animation={slideInFromBottom}>
            <h2 className="text-4xl font-bold underline-title-white mb-8 font-yaro">
              What Our Clients Say
            </h2>
          </AnimatedSection>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
          >
            {[
              {
                name: "Joseph from Denmark",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Jade from USA",
                img: "https://randomuser.me/api/portraits/women/32.jpg",
              },
              {
                name: "Xin Paul from Singapore",
                img: "https://randomuser.me/api/portraits/men/33.jpg",
              },
            ].map((client, index) => (
              <motion.div
                key={index}
                className="bg-[#00B3FF26] text-white p-6 rounded-lg shadow-lg"
                variants={fadeIn}
                whileHover={{ scale: 1.05, backgroundColor: "#00B3FF40" }}
              >
                <p className="text-gray-400">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Proin consequat, risus vitae scelerisque tincidunt, purus
                  turpis cursus erat, vel faucibus ligula lorem nec lectus."
                </p>
                <div className="mt-4 flex flex-col items-center">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-12 h-12 rounded-full mb-2 shadow-md"
                  />
                  <p className="font-semibold text-white ">{client.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
