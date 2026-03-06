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
   ];

   return (
     <header
       className={`fixed top-0 left-0 z-50 w-full bg-white ${
         isScrolled ? "bg-gradient-to-r text-white font-bold   shadow-sm  rounded-lg ml-2 mr-2" : ""
       }`}
     >
       <div className="max-w-6xl mx-auto px-4">
         <div className="flex items-center p-10 justify-between h-16">
           {/* Logo */}
           <Link to="/">
             <img
               src= {logo}
               alt="Logo"
               className="h-56  w-72"
             />
           </Link>

           {/* Desktop Nav */}
           <nav className="hidden md:flex gap-8">
             {navItems.map((item) => (
               <Link
                 key={item.to}
                 to={item.to}
                 className="text-gray-700 hover:text-teal-600 transition-colors"
                 onClick={() => isMenuOpen && toggleMenu()}
               >
                 {item.label}
               </Link>
             ))}
           </nav>

           {/* Mobile Menu Button */}
           <button
             onClick={toggleMenu}
             className="md:hidden p-2"
             aria-label="Toggle menu"
           >
             {isMenuOpen ? <X className="w-20 h-20"/> : <Menu className="w-20 h-20" />}
           </button>
         </div>

         {/* Mobile Menu */}
         {isMenuOpen && (
           <nav className="md:hidden py-2 bg-black flex flex-col text-white justify-center items-center shadow-lg rounded-b-lg">
             {navItems.map((item) => (
               <Link
                 key={item.to}
                 to={item.to}
                 className="block py-2 px-4 text-white hover:text-teal-600 hover:bg-gray-50 transition-colors"
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
