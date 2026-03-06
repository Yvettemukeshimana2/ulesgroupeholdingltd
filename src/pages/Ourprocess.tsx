import React from "react";
import { motion } from "framer-motion";

const OurProcess: React.FC = () => {
  const reasons = [
    {
      title: "Expertise",
      description: "Our team of highly skilled engineers brings a wealth of experience in Mechanical and MEP systems.",
      icon: "fa-cogs",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Reliability",
      description: "We ensure timely delivery and adherence to all project specifications, providing peace of mind for our clients.",
      icon: "fa-shield-alt",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Customized Solutions",
      description: "We offer tailored solutions that fit the unique needs of every client, ensuring the best possible outcomes.",
      icon: "fa-puzzle-piece",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Innovative Approach",
      description: "We are committed to adopting the latest technologies and best practices to provide cutting-edge solutions.",
      icon: "fa-lightbulb",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Commitment to Safety",
      description: "Our operations meet the highest safety standards to ensure a safe working environment and protect our clients' assets.",
      icon: "fa-hard-hat",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-700 to-gray-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-customBlue-950 to-white bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Discover what sets us apart and why we're the trusted choice for engineering excellence
          </p>
          <div className="flex justify-center mt-8">
            <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.slice(0, 3).map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${reason.color}`}></div>
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${reason.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`fa ${reason.icon} text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reasons.slice(3).map((reason, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${reason.color}`}></div>
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${reason.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`fa ${reason.icon} text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Work with Us?</h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your engineering vision to life with our expertise and commitment to excellence.
            </p>
            <button className="px-8 py-3 text-customBlue-950 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;
