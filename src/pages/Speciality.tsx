import React from "react";
import { motion } from "framer-motion";
import weddingImage from "../assets/t12.jpeg";
import partyImage from "../assets/t5.jpeg";
import party from "../assets/t8.jpeg";
// Data array with image paths
const specialtiesData = [
  {
    title: "Technical Expertise:",
    description:
      " The company possesses a strong foundation in mechanical and MEP engineering, backed by skilled professionals with extensive experience in the field. This expertise enables the delivery of high-quality solutions tailored to client needs",
    image: weddingImage,
  },
  {
    title: "Innovative Solutions:",
    description:
      "  Utilization of advanced technologies and innovative design approaches enhances project efficiency and effectiveness, providing a competitive edge in the market.",
    image: partyImage,
  },
  {
    title: "Established Relationships: ",
    description:
      "Strong connections with suppliers, contractors, and industry stakeholders facilitate smoother project execution and resource acquisition",
    image:party,
  }
];
const Specialties: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-4">
          <span className="text-customBlue-950  bg-clip-text text-transparent">
            Our Specialties
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-6 mx-auto">
          We combine deep technical knowledge with innovative thinking and strong
          industry connections to deliver best-in-class solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {specialtiesData.map((specialty, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-64 overflow-hidden">
                <motion.img
                  src={specialty.image}
                  alt={specialty.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  {specialty.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Specialties;