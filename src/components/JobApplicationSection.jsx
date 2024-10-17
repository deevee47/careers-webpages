import React from "react";
import { Briefcase, Clock, Send } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AnimatedSection = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUpVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const JobCard = ({ title, type, description, buttonColor }) => {
  return (
    <AnimatedSection className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-2">
        <Clock className="w-4 h-4 mr-2 text-gray-500" />
        <p className="text-sm text-gray-500">{type}</p>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        className={`px-4 py-2 rounded-full text-white ${buttonColor} transition-colors duration-300 flex items-center justify-center`}
      >
        <Briefcase className="w-4 h-4 mr-2 " />
        APPLY NOW
      </button>
    </AnimatedSection>
  );
};

const JobApplicationSection = () => {
  const jobListings = [
    {
      title: "Head Gardener",
      type: "FULL TIME / PART TIME",
      description:
        "Lead our gardening team in creating and maintaining beautiful landscapes for our clients.",
      buttonColor: "bg-[#00B3FF] hover:bg-[#1D3D71]",
    },
    {
      title: "Care Taker",
      type: "FULL TIME",
      description:
        "Provide compassionate care and support for individuals in need of assistance.",
      buttonColor: "bg-[#00B3FF] hover:bg-[#1D3D71]",
    },
    {
      title: "Field Inspector",
      type: "PART TIME",
      description:
        "Ensure quality and compliance by conducting thorough inspections of our projects.",
      buttonColor: "bg-[#00B3FF] hover:bg-[#1D3D71]",
    },
    {
      title: "Lawn Operator",
      type: "FULL TIME / PART TIME",
      description:
        "Maintain pristine lawns and green spaces using state-of-the-art equipment.",
      buttonColor: "bg-[#00B3FF] hover:bg-[#1D3D71]",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold font-yaro text-[#1D3D71] mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why joining our team is a great choice for your career
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <AnimatedSection className="bg-white p-6 rounded-lg shadow-2xl hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Professional Growth
            </h3>
            <p className="text-gray-600">
              We invest in your development with ongoing training and mentorship
              programs.
            </p>
          </AnimatedSection>
          <AnimatedSection className="bg-white p-6 rounded-lg shadow-2xl hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Work-Life Balance
            </h3>
            <p className="text-gray-600">
              Enjoy flexible schedules and a supportive environment that values
              your well-being.
            </p>
          </AnimatedSection>
          <AnimatedSection className="bg-white p-6 rounded-lg shadow-2xl hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Innovative Projects
            </h3>
            <p className="text-gray-600">
              Work on cutting-edge projects that make a real difference in
              people's lives.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold font-yaro text-[#1D3D71] mb-4">
            Let's Join With Us!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be part of a team that values innovation, sustainability, and
            personal growth. Together, we can create beautiful spaces and
            meaningful experiences.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {jobListings.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>

          <AnimatedSection className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Join Our Team
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email*"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="text"
                placeholder="Your Position*"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <textarea
                placeholder="Enter your message"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#00B3FF] hover:bg-[#1D3D71] text-white py-3 rounded-full  transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                SEND APPLICATION
              </button>
            </form>
          </AnimatedSection>
        </div>
        <AnimatedSection className="text-center mb-16 mt-14                                                                      ">
          <h2 className="text-4xl font-bold font-yaro text-[#1D3D71] mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join a team that offers unparalleled experiences and opportunities
            for growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Collaborative Environment
              </h3>
              <p className="text-gray-600">
                Work alongside passionate individuals who inspire and support
                each other.
              </p>
            </AnimatedSection>
            <AnimatedSection className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Skill Development
              </h3>
              <p className="text-gray-600">
                Access to resources and training that help you develop new
                skills and advance your career.
              </p>
            </AnimatedSection>
            <AnimatedSection className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Impactful Work
              </h3>
              <p className="text-gray-600">
                Be part of projects that positively impact the community and the
                environment.
              </p>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default JobApplicationSection;
