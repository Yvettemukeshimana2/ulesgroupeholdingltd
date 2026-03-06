 import React, { useState, useEffect } from "react";
//  import im1 from "../assets/Pictures/Agricultural Heavy Machine (2).jpg";
//  import im2 from "../assets/Pictures/Agricultural Heavy Machine.jpg";
 import im3 from "../assets/6.jpg";
//  import { Link } from "react-router-dom";
//  import WhatsAppChatButton from "../Component/Whatsapchart";

 const services = [
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlK_ZNNhuafGAdAPTIVTCp0uPJ3-AGluhH4w&s",
     title: "Industrial Air Purification",
     description: "Advanced air purification systems designed for industrial environments.",
     features: ["HEPA Filters", "Continuous Monitoring", "Custom Installations"],
     externalLink: "https://ulesgrouposhenvironment.com/",
   },
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtDsjwnJfT2i0_VbG46bhZsuBmki76bwL2A&s" ,
     title: "Consultation & Implementation",
     description: "Expert consultation and project implementation tailored to your business.",
     features: ["Site Surveys", "Design & Planning", "Turnkey Deployment"],
     externalLink: "https://ulesgrouposhenvironment.com/consultation-implementation",
   },
   {
     img: im3,
     title: "OSH and Mechanical Training",
     description: "Occupational safety & health and mechanical training programs.",
     features: ["Certified Instructors", "Hands-on Sessions", "ISO Compliance"],
     externalLink: "https://ulesgrooupacademics.com/",
   },
 ];

 const OurServices: React.FC = () => {
   const [displayedText, setDisplayedText] = useState("");
   const fullText = "Featured Services";

   useEffect(() => {
     let currentIndex = 0;
     const typingInterval = setInterval(() => {
       if (currentIndex <= fullText.length) {
         setDisplayedText(fullText.slice(0, currentIndex));
         currentIndex++;
       } else {
         clearInterval(typingInterval);
       }
     }, 80);
     return () => clearInterval(typingInterval);
   }, []);

   const styles = `
     @keyframes blink {
       0%, 50% { opacity: 1; }
       51%, 100% { opacity: 0; }
     }
     @keyframes slideUpCard {
       from { opacity: 0; transform: translateY(30px); }
       to { opacity: 1; transform: translateY(0); }
     }
     .typing-cursor { display: inline-block; width: 3px; height: 1em; background:#0a2472; margin-left:2px; animation: blink 0.7s infinite; }
     .heading-gradient { background: linear-gradient(#0a2472 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
     .service-card { animation: slideUpCard 0.6s ease-out; }
   `;

   return (
     <section className="py-20 bg-gray-50">
       <style>{styles}</style>

       {/* Header */}
       <div className="max-w-7xl mx-auto px-4 text-center mb-12">
         <h1 className="text-4xl md:text-5xl font-bold heading-gradient mb-4 min-h-20">
           {displayedText}
           {displayedText.length < fullText.length && <span className="typing-cursor"></span>}
         </h1>
         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
           Explore a selection of our core offerings with detailed information available through the links below.
         </p>
       </div>

       {/* Cards Grid */}
       <div className="max-w-7xl mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {services.map((service, index) => (
             <div
               key={index}
               className="service-card group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
             >
               <div className="relative h-64 overflow-hidden bg-gray-200">
                 <img
                   src={service.img}
                   alt={service.title}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 />
               </div>
               <div className="p-6 flex flex-col flex-grow">
                 <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-customBlue-950 transition-colors duration-300">
                   {service.title}
                 </h2>
                 <p className="text-gray-600 text-sm mb-4 flex-grow">
                   {service.description}
                 </p>
                 <div className="mb-4 space-y-2">
                   {service.features.map((f, fi) => (
                     <div key={fi} className="flex items-center text-sm text-gray-700">
                       <i className="fa fa-check text-customBlue-950 mr-2"></i>{f}
                     </div>
                   ))}
                 </div>
                 <a
                   href={service.externalLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="mt-auto"
                 >
                   <button className="w-32 py-3 bg-customBlue-950 text-white font-semibold rounded-lg hover:bg-black transition-all duration-300 transform hover:scale-105">
                     More Details
                   </button>
                 </a>
               </div>
             </div>
           ))}
         </div>
       </div>

     </section>
   );
 };

 export default OurServices;
