 import { useCallback, useEffect, useState } from "react";
 import { Link } from "react-router-dom";
 import { Menu, X } from "lucide-react";
 import logo from "../assets/Ules logo-01.png";

 const NavBar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   // Throttled scroll handler using requestAnimationFrame
   useEffect(() => {
     let ticking = false;

     const handleScroll = () => {
       if (!ticking) {
         window.requestAnimationFrame(() => {
           setIsScrolled(window.scrollY > 50);
           ticking = false;
         });
         ticking = true;
       }
     };

     window.addEventListener("scroll", handleScroll, { passive: true });
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   // Memoized toggle handler
   const toggleMenu = useCallback(() => {
     setIsMenuOpen((prev) => !prev);
   }, []);

   // Navigation items
   const navItems = [
     { to: "/", label: "Home" },
     { to: "/aboutus1", label: "About Us" },
     { to: "/contactus", label: "Contact" },
     { to: "/venue", label: "Services" },
    { to: "/Teampage", label: "Our Team" },
    { to: "/Project", label: "project & Portifolio" },
     { to: "/testimony", label: "Testimony" },

   ];

   return (
     <header
       className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
         isScrolled ? "bg-white shadow-lg" : "bg-white"
       }`}
     >
       <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
         <div className="flex items-center justify-between h-16 sm:h-20">
           {/* Logo */}
           <Link to="/" className="flex items-center shrink-0 min-w-0">
             <img
               src={logo}
               alt="Ules Group Holding LTD Logo"
               className="h-11 sm:h-12 md:h-14 w-auto max-h-[3.5rem] object-contain"
             />
           </Link>

           {/* Desktop Nav */}
           <nav className="hidden md:flex gap-2 lg:gap-4">
             {navItems.map((item) => (
               <Link
                 key={item.to}
                 to={item.to}
                 className="text-sm lg:text-sm text-gray-700 hover:text-customBlue-950 transition-colors font-medium px-2 lg:px-3 py-2 rounded hover:bg-gray-100"
               >
                 {item.label}
               </Link>
             ))}
           </nav>

           {/* Mobile Menu Button */}
           <button
             onClick={toggleMenu}
             className="md:hidden p-2 text-customBlue-950"
             aria-label="Toggle menu"
           >
             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
         </div>

         {/* Mobile Menu */}
         {isMenuOpen && (
           <nav className="md:hidden pb-4 bg-white border-t border-gray-200 flex flex-col gap-0.5">
             {navItems.map((item) => (
               <Link
                 key={item.to}
                 to={item.to}
                 className="block py-3.5 px-4 text-base text-gray-800 hover:text-customBlue-950 hover:bg-gray-50 transition-colors rounded-lg min-h-[48px] flex items-center"
                 onClick={toggleMenu}
               >
                 {item.label}
               </Link>
             ))}
           </nav>
         )}
       </div>
     </header>
   );
 };

 export default NavBar;
