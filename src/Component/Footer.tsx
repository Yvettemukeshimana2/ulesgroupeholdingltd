import React from "react";
import logo from "../assets/Ules logo-01.png";

interface FooterProps {
  companyName: string;
  year: number;
}

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  const links = [
    { href: "/", label: "Home", category: "Useful Links" },
    { href: "/about", label: "About", category: "Useful Links" },
    { href: "/contact", label: "Contact", category: "Useful Links" },
    { href: "/team", label: "Our Team", category: "Useful Links" },
    {
      href: "/venue",
      label: "Industrial Air Purification",
      category: "Services",
    },
    {
      href: "/venue",
      label: "Consultation & Implementation",
      category: "Services",
    },
    {
      href: "/venue",
      label: "OSH and Mechanical Training",
      category: "Services",
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "fa-facebook-f", href: "https://facebook.com", color: "hover:text-blue-400" },
    { name: "Twitter", icon: "fa-twitter", href: "https://twitter.com", color: "hover:text-sky-400" },
    { name: "Instagram", icon: "fa-instagram", href: "https://instagram.com", color: "hover:text-pink-400" },
    { name: "LinkedIn", icon: "fa-linkedin-in", href: "https://linkedin.com", color: "hover:text-blue-500" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-customBlue-950/20 to-black/20"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-customBlue-950/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-customBlue-950 bg-clip-text text-transparent mb-4">
                  {companyName}
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Leading provider of engineering excellence and innovative solutions since {year}.
                  Committed to delivering quality and innovation in every project.
                </p>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white">Stay Updated</h4>
                <div className="flex flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customBlue-950 text-sm"
                  />
                  <button className="px-6 py-2 bg-customBlue-950 hover:bg-black text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-customBlue-950 pb-2 inline-block">
                Useful Links
              </h4>
              <ul className="space-y-3">
                {links
                  .filter((link) => link.category === "Useful Links")
                  .map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-base text-gray-300 hover:text-customBlue-950 transition-colors duration-300 flex items-center group"
                      >
                        <i className="fa fa-chevron-right text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                        {link.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-customBlue-950 pb-2 inline-block">
                Our Services
              </h4>
              <ul className="space-y-3">
                {links
                  .filter((link) => link.category === "Services")
                  .map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-base text-gray-300 hover:text-customBlue-950 transition-colors duration-300 flex items-center group"
                      >
                        <i className="fa fa-chevron-right text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                        {link.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-customBlue-950 pb-2 inline-block">
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="fa fa-phone text-customBlue-950 mt-1 flex-shrink-0"></i>
                  <div className="min-w-0">
                    <p className="text-gray-300 text-sm">Phone Numbers</p>
                    <p className="text-white text-sm break-words">+250 789 319 155</p>
                    <p className="text-white text-sm break-words">+250 787 042 094</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <i className="fa fa-envelope text-customBlue-950 mt-1 flex-shrink-0"></i>
                  <div className="min-w-0">
                    <p className="text-gray-300 text-sm">Email</p>
                    <a
                      href="mailto:info@ulesgroupholding.com"
                      className="text-white hover:text-customBlue-950 transition-colors duration-300 text-sm break-words"
                    >
                      info@ulesgroupholding.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <i className="fa fa-map-marker-alt text-teal-400 mt-1"></i>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white">Kigali, Gasabo, Ndera</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-row justify-between items-center space-y-0">
              {/* Social Media Links */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <img
                    src={logo}
                    alt="Ules Group Holding Ltd Logo"
                    className="w-12 h-12 object-contain bg-white rounded-lg p-1 shadow-lg"
                  />
                  <span className="text-gray-300 font-medium text-lg">Follow Us:</span>
                </div>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl`}
                      aria-label={social.name}
                    >
                      <i className={`fab ${social.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Copyright */}
              <div className="text-right">
                <p className="text-gray-400 text-sm">
                  © {year} <span className="text-teal-400 font-semibold">{companyName}</span>. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Built with excellence and innovation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="relative">
          <svg
            className="absolute bottom-0 left-0 w-full h-12 text-gray-100"
            fill="currentColor"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </div>
    </footer>
  );
 };

 export default Footer;
