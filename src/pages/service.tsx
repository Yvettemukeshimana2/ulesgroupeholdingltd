    import React, { useState, useEffect } from "react";
import im3 from "../assets/11.jpg";
import { Link } from "react-router-dom";

const services = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlK_ZNNhuafGAdAPTIVTCp0uPJ3-AGluhH4w&s",
    title: "Industrial Air Purification",
    description: "State-of-the-art air purification systems for industrial environments ensuring clean and safe workspace.",
    features: ["HEPA Filtration", "Real-time Monitoring", "Energy Efficient"],
    // link: "/services/2",
    link: "https://ulesgrooupacademics.com/",
  },
  {
    img: im3,
    title: "Consultation & Implementation",
    description: "Expert consultation and seamless implementation of solutions tailored to your business needs.",
    features: ["Custom Solutions", "Expert Guidance", "Full Support"],
    link: "https://ulesgrooupacademics.com/",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtDsjwnJfT2i0_VbG46bhZsuBmki76bwL2A&s",
    title: "OSH and Mechanical Training",
    description: "Comprehensive occupational safety & health and mechanical training programs for your workforce.",
    features: ["Certified Trainers", "Hands-on Training", "Certification"],
    link: "https://ulesgrooupacademics.com/",
  },
];

const OurServices: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Our Services";

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
      0%, 50% {
        opacity: 1;
      }
      51%, 100% {
        opacity: 0;
      }
    }
    @keyframes slideUpCard {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .typing-cursor {
      display: inline-block;
      width: 3px;
      height: 1em;
      background: linear-gradient(135deg, #14b8a6, #0d9488);
      margin-left: 2px;
      animation: blink 0.7s infinite;
    }
    .heading-gradient {
      background: linear-gradient( #0a2472 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .service-card {
      animation: slideUpCard 0.6s ease-out;
    }
  `;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <style>{styles}</style>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 mb-3">
        <div className="text-center mb-5">
          <h1 className="text-5xl md:text-4xl font-bold heading-gradient  min-h-20">
            {displayedText}
            {displayedText.length < fullText.length && <span className="typing-cursor"></span>}
          </h1>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-customBlue-950 to-black rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600  mx-auto">
            We provide comprehensive solutions designed to meet your business needs with excellence and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group h-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-customBlue-950 transition-colors duration-300">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <i className="fa fa-check text-customBlue-950 mr-2"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Link to={service.link} className="mt-auto">
                  <button className="w-full py-3 px-4 bg-customBlue-950 hover:bg-black text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 bg-gradient-to-b from-gray-700 to-gray-600 ">
        <div className="bg-gradient-to-r from-customBlue-950 to-black rounded-xl overflow-hidden shadow-2xl">
          <div className="py-12 px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore All Our Services
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Discover our complete range of solutions and find the perfect fit for your organization.
            </p>
            <Link to="/venue">
              <button className="px-8 py-4 bg-white text-customBlue-950 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;

