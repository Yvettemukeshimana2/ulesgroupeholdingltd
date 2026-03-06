import "font-awesome/css/font-awesome.min.css";
import { useState, useEffect } from "react";
import t1 from "../assets/byimana.jpeg";
import t2 from "../assets/dave.jpeg";
import yv from "../assets/yvette.jpg";
import team from "../assets/t1.jpeg"

const teamMembers = [
  {
    name: "Dr.Byimana Jean Bosco",
    title: "CEO & Chief Operations Officer",
    image: t1,
    description: "Visionary leader with extensive experience in business development and operations management",
    email: "mailto:bosco@ulesholdingltd.com",
    linkedin: "https://linkedin.com",
    phone: "tel:+250700000000",
  },
  {
    name: "David Irakiza Ndayisaba",
    title: "Chief Technology Officer & Senior Engineer",
    image: t2,
    description: "Technical expert specializing in engineering solutions and manufacturing facilities design",
    email: "mailto:david@ulesholdingltd.com",
    linkedin: "https://linkedin.com",
    phone: "tel:+250700000001",
  },
  {
    name: "Yvan ISABANE",
    title: "Graphic Designer & Creative Lead",
    image: "", // Placeholder for image
    description: "Creative professional delivering stunning visual designs and brand identity solutions",
    email: "mailto:yvan@ulesholdingltd.com",
    linkedin: "https://linkedin.com",
    phone: "tel:+250700000002",
  },
  {
    name: "Yvette Mukeshimana",
    title: "IT Manager & Marketing Officer",
    image: yv,
    description: "Strategic thinker combining IT infrastructure expertise with innovative marketing strategies",
    email: "mailto:mukeshimanayvette2@gmail.com",
    linkedin: "https://linkedin.com/in/yvette-mukeshimana",
    phone: "tel:+250789017110",
  },
  {
    name: "Hirwa Will",
    title: "IT Support specialist",
    image:"",
    description:  "Dedicated IT support specialist ensuring seamless technology operation and exceptional user experience",
    email: "mailto:bosco@ulesholdingltd.com",
    linkedin: "https://linkedin.com",
    phone: "tel:+250700000000",
  },
];

const TeamPage = () => {
  const valuesHeading = "Our Team Values";
  
  const [displayedValuesText, setDisplayedValuesText] = useState("");

  useEffect(() => {
    let delay = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= valuesHeading.length) {
          setDisplayedValuesText(valuesHeading.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 80);

      return () => clearInterval(typingInterval);
    }, 2000);

    return () => clearTimeout(delay);
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
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
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
    .heading-main {
      background: linear-gradient(#0a2472 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -1px;
    }
    .heading-secondary {
      background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .content-fade {
      animation: slideUp 0.8s ease-out;
    }
  `;

  return (
    <section className="relative" id="team-section">
      <style>{styles}</style>

      {/* Full Screen Hero Image */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <img
          src= {team}
          alt="Team Collaboration"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-6xl md:text-5xl font-bold mb-6 drop-shadow-2xl">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-lg">
              Discover the talented professionals behind Ules Groupe Holding LTD
            </p>
            <div className="flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        {/* Header Section */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">Ules Groupe Holding LTD</span>, we bring together talented professionals dedicated to excellence
          </p>
        <div className="flex justify-center mt-6">
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-700 rounded-full"></div>
        </div>
        <p className="text-lg text-gray-600 mt-1">
          Our diverse team combines expertise in engineering, technology, and business strategy to deliver innovative solutions and exceptional results.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group h-full transition-all duration-500 hover:scale-105"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative h-72 bg-gray-200 overflow-hidden flex items-center justify-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-60 h-80 object-fit group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-center">
                      <i className="fa fa-user text-6xl text-gray-400"></i>
                    </div>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title and Role */}
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-teal-700 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-teal-600 mb-3 uppercase tracking-wide">
                    {member.title}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-4 justify-center pt-4 border-t border-gray-200">
                    <a
                      href={member.email}
                      className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label="Email"
                      title="Send Email"
                    >
                      <i className="fa fa-envelope text-lg"></i>
                    </a>
                    <a
                      href={member.linkedin}
                      className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label="LinkedIn"
                      title="LinkedIn Profile"
                    >
                      <i className="fa fa-linkedin text-lg"></i>
                    </a>
                    <a
                      href={member.phone}
                      className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label="Phone"
                      title="Call Now"
                    >
                      <i className="fa fa-phone text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Values Section */}
      <div className=" bg-white rounded-xl  px-8">
        <h2 className="text-4xl font-bold text-center heading-secondary mb-12 min-h-16">
          {displayedValuesText}
          {displayedValuesText.length < valuesHeading.length && <span className="typing-cursor"></span>}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-teal-100 p-4 rounded-full">
                <i className="fa fa-lightbulb-o text-4xl text-teal-700"></i>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">
              We constantly push boundaries to find creative solutions and stay ahead of industry trends.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-teal-100 p-4 rounded-full">
                <i className="fa fa-handshake-o text-4xl text-teal-700"></i>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Collaboration</h3>
            <p className="text-gray-600">
              Teamwork is at the heart of everything we do, fostering trust and mutual growth.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-teal-100 p-4 rounded-full">
                <i className="fa fa-star text-4xl text-teal-700"></i>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600">
              We are committed to delivering the highest quality in every project and service.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default TeamPage;
