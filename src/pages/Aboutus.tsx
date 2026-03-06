import React from "react";
import { motion } from "framer-motion";
// import missionImg from "../assets/9.jpg";
// import historyImg from "../assets/5.jpg";

// Define interfaces for our types
interface CoreValue {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
  color: string;
}

interface StatProps {
  number: string;
  label: string;
  index: number;
}

// Core values data array
const coreValues: CoreValue[] = [
  {
    title: "Innovation",
    description:
      "We continuously adopt and implement cutting-edge technologies and processes to offer the most efficient solutions.",
    icon: "💡",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Integrity",
    description:
      "We operate with transparency and honesty, ensuring that every interaction and transaction is conducted with the utmost professionalism.",
    icon: "🤝",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Quality",
    description:
      "Our work is defined by excellence. We are committed to delivering long-lasting, high-quality results in every project.",
    icon: "⭐",
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Safety First",
    description:
      "Safety is central to everything we do. We adhere to strict safety regulations and industry standards to ensure the well-being of both our team and our clients.",
    icon: "🛡️",
    color: "from-violet-500 to-indigo-600",
  },
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "50+", label: "Expert Team Members" },
];

// Stat card component
const StatCard: React.FC<StatProps> = ({ number, label, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="text-center"
  >
    <p className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
      {number}
    </p>
    <p className="text-gray-600 text-base sm:text-lg font-semibold">{label}</p>
  </motion.div>
);

// Reusable card component with proper typing
const ValueCard: React.FC<ValueCardProps> = ({
  title,
  description,
  icon,
  index,
  color,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative"
  >
    <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300`}></div>
    <div className="relative bg-white rounded-2xl shadow-xl p-8 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${color} mb-5 transform group-hover:scale-110 transition-transform duration-300`}>
        <span className="text-3xl">{icon}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed text-base">
        {description}
      </p>

      {/* Accent Line */}
      <div className={`mt-6 h-1 w-12 bg-gradient-to-r ${color} rounded-full group-hover:w-full transition-all duration-300`}></div>
    </div>
  </motion.div>
);

 const AboutUs: React.FC = () => {
   const fadeInUp = {
     initial: { opacity: 0, y: 50 },
     whileInView: { opacity: 1, y: 0 },
     transition: { duration: 0.8 },
   };

   const content = {
     mission:
       "To deliver innovative and sustainable Manufacturing, Mechanical and MEP engineering solutions that enhance the efficiency and performance of our clients' projects. We are committed to providing exceptional service while adhering to the highest standards of quality, safety, and integrity.",
     vision: "To be a recognized leader in manufacturing, mechanical, and MEP engineering solutions, celebrated for our unwavering commitment to excellence, innovation, and sustainability. We aspire to set industry benchmarks through cutting-edge technology.",
   };

   return (
     <div className="w-full bg-white">
       {/* Hero Section */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.8 }}
         className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden"
       >
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-20">
           <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
           <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
           <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
         </div>

         {/* Content */}
         <div className="relative z-10 text-center px-4 py-16">
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-5xl sm:text-5xl md:text-5xl font-bold text-black mb-6 leading-tight"
           >
             About <span className="bg-gradient-to-r from-customBlue-950 to-blue-800 bg-clip-text text-transparent">Ules Holding Group Ltd</span>
           </motion.h1>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-sm sm:text-2xl text-blue-800 max-w-3xl mx-auto leading-relaxed"
           >
             Delivering Innovative Manufacturing, Mechanical & MEP Solutions
           </motion.p>
         </div>
       </motion.div>

       {/* Stats Section */}
       <motion.div
         {...fadeInUp}
         className="px-4 md:px-6 py-12 md:py-16 bg-gradient-to-r from-blue-50 to-indigo-50"
       >
         <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
           {stats.map((stat, index) => (
             <StatCard key={index} {...stat} index={index} />
           ))}
         </div>
       </motion.div>

       {/* Mission & Vision Section */}
       <motion.div
         {...fadeInUp}
         className="px-4 md:px-6 py-12 md:py-20"
       >
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
           {/* Mission Card */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="relative group"
           >
             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
             <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
               <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
               <div className="p-8 md:p-10">
                 <div className="flex items-center gap-4 mb-6">
                   <span className="text-3xl">🎯</span>
                   <h3 className="text-3xl md:text-xl font-bold text-gray-900">
                     Our Mission
                   </h3>
                 </div>
                 <p className="text-gray-700 text-lg leading-relaxed">
                   {content.mission}
                 </p>
               </div>
             </div>
           </motion.div>

           {/* Vision Card */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="relative group"
           >
             <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
             <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
               <div className="h-2 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
               <div className="p-8 md:p-10">
                 <div className="flex items-center gap-4 mb-6">
                   <span className="text-3xl">🌟</span>
                   <h3 className="text-3xl md:text-xl font-bold text-gray-900">
                     Our Vision
                   </h3>
                 </div>
                 <p className="text-gray-700 text-lg leading-relaxed">
                   {content.vision}
                 </p>
               </div>
             </div>
           </motion.div>
         </div>
       </motion.div>

       {/* Core Values Section */}
       <motion.div
         {...fadeInUp}
         className="px-4 md:px-6 py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100"
       >
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-14 md:mb-16">
             <motion.h2
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="text-4xl sm:text-5xl md:text-3xl font-bold text-gray-900 mb-4"
             >
               Our <span className="bg-gradient-to-r from-customBlue-950 to-indigo-600 bg-clip-text text-transparent">Core Values</span>
             </motion.h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               The principles that guide every decision and action we take in delivering excellence
             </p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {coreValues.map((value, index) => (
               <ValueCard
                 key={index}
                 title={value.title}
                 description={value.description}
                 icon={value.icon}
                 color={value.color}
                 index={index}
               />
             ))}
           </div>
         </div>
       </motion.div>

       {/* Why Choose Us Section */}
       <motion.div
         {...fadeInUp}
         className="px-4 md:px-6 py-12 md:py-20"
       >
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-14 md:mb-16">
             <motion.h2
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="text-4xl sm:text-5xl md:text-4xl font-bold text-gray-900 mb-4"
             >
               Why Choose <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">ULES Group Holding LTD?</span>
             </motion.h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               Experience engineering excellence combined with innovation and reliability
             </p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
             {[
               {
                 title: "Expert Team",
                 description: "Highly qualified professionals with years of industry experience and proven track record",
                 icon: "👥",
               },
               {
                 title: "Advanced Technology",
                 description: "Cutting-edge tools and methodologies ensuring optimal results and efficiency",
                 icon: "⚙️",
               },
               {
                 title: "Client-Focused",
                 description: "Customized solutions tailored to meet your unique business requirements and goals",
                 icon: "🎯",
               },
               {
                 title: "On-Time Delivery",
                 description: "Committed to meeting deadlines while maintaining exceptional quality standards",
                 icon: "⏱️",
               },
               {
                 title: "Safety Standards",
                 description: "Strict adherence to industry standards and best practices for optimal safety",
                 icon: "✅",
               },
               {
                 title: "Sustainable Solutions",
                 description: "Environmentally responsible engineering practices for a better future",
                 icon: "🌱",
               },
             ].map((item, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: index * 0.1 }}
                 className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 border border-gray-200 hover:border-blue-400"
               >
                 <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                   {item.icon}
                 </div>
                 <h4 className="text-xl font-bold text-gray-900 mb-3">
                   {item.title}
                 </h4>
                 <p className="text-gray-600 leading-relaxed">
                   {item.description}
                 </p>
                 <div className="mt-4 h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full group-hover:w-full transition-all duration-300"></div>
               </motion.div>
             ))}
           </div>
         </div>
       </motion.div>
     </div>
   );
 };

 export default AboutUs;