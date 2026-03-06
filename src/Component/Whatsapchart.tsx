 import React, { useState, useEffect, useRef } from "react";
 import { FaWhatsapp } from "react-icons/fa";
 import icon1 from "../assets/1.jpg";
 import Avatar from "../assets/1.jpg";
 import { motion } from "framer-motion";
const faq: Record<string, string> = {
  "What services does NexGen Engineering Ltd offer?":
    "NexGen Engineering Ltd specializes in manufacturing spacecraft, watercraft, land-operational machinery, and metal fabrication. The company offers comprehensive mechanical engineering solutions, including plant system design and installations, industrial machinery setup, engineering consultancy, logistics, plant automation, heavy machinery maintenance, reliability services, and the supply of engineering materials and equipment.",

  "How do I initiate a project with NexGen Engineering Ltd?":
    "You can initiate a project by contacting their Customer Services team via phone (250789319155/250798584384) or email (nexgene24@gmail.com ) for a preliminary discussion and subsequent quote or proposal",

  " What is your commitment to quality and safety?":
    " NexGen Engineering Ltd is committed to delivering solutions that meet the highest standards of quality and safety, using extensive experience and cutting-edge expertise",

  "Can you handle projects of any size and complexity?":
    "Yes, we possess the expertise to undertake projects of any scale and complexity. Our capabilities extend to manufacturing projects, including the production of spacecraft, watercraft, and land-operational machinery. Additionally, we excel in executing commercial infrastructure projects,such as hotel transformations, factory expansions, educational facility upgrades, hospitals and theconstruction of bridges.",

  " What kind of support do you offer?":
    "We offer 24/7 support for all emergency inquiries, and we have a dedicated customer service team available during business hours (Monday – Saturday: 6.00am – 11.00pm)",

  " Do you provide residential services as well?":
    "Yes, NexGen Engineering Ltd also offers residential engineering solutions, including reliable plumbing, heating systems, HVAC (Heating, Ventilation, and Air Conditioning efficient pumpingstations, and booster sets to enhance water pressure",
};

 const WhatsAppChatButton: React.FC = () => {
   const [chatActive, setChatActive] = useState(false);
   const [conversation, setConversation] = useState<
     { question: string; answer: string }[]
   >([]);
   const [remainingQuestions, setRemainingQuestions] = useState(
     Object.keys(faq).slice(0, 5)
   );

   const chatContentRef = useRef<HTMLDivElement>(null);

   const handleSelectQuestion = (question: string) => {
     const answer = faq[question];
     setConversation((prevConversation) => [
       ...prevConversation,
       { question, answer },
     ]);
   };

   const handleSelectAnotherQuestion = () => {
     // Reset the conversation state
     setConversation([]);
     setRemainingQuestions(Object.keys(faq).slice(0, 5));
   };

   const handleCloseChat = () => {
     setChatActive(false);
     setConversation([]);
     setRemainingQuestions(Object.keys(faq).slice(0, 5));
   };

   useEffect(() => {
     if (chatContentRef.current) {
       chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
     }
   }, [conversation]);

   return (
     <div className="fixed">
       <div className="">
      <style>
        {/* {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .bounce {
            animation: bounce 1.5s infinite;
          }
        `} */}
      </style>
      <button
         onClick={() => setChatActive(!chatActive)}
         className="fixed bounce bottom-16 right-4 bg-customGreen-700 text-white p-4 rounded-full z-50 shadow-lg hover:bg-customTeal-950 transition-colors duration-300"
         style={{ zIndex: 9999 }}
       >
         <FaWhatsapp className="sm:w-6 sm:h-6  w-24 h-24" />
       </button>
    </div>
       
       {/* Chat Window */}
       {chatActive && (
         <div
           className="fixed bottom-2 right-4 sm:w-96 p-4 bg-white bg-opacity-95 border border-gray-300 rounded-lg max-h-[70vh] overflow-y-96 shadow-md z-50"
           ref={chatContentRef}
           style={{ zIndex: 9999 }}
         >
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="flex flex-col"
           >
             {/* Chat Header */}
             <div className="flex items-center justify-between mb-4 bg-gray-100 p-2 rounded-lg">
               <div className="flex items-center space-x-2">
                 <img
                   src={icon1}  
                   alt="Profile"
                   className="w-10 h-10 rounded-full"
                 />
                 <div>
                   <p className="font-semibold">Jayne N.</p>
                   <p className="text-xs text-customTeal-950">Online</p>
                 </div>
               </div>
               <button
                 onClick={handleCloseChat}
                 className="text-gray-700 font-bold hover:text-red-800 transition-colors duration-300"
               >
                 &#x2715;
               </button>
             </div>
             <div className="text-sm text-gray-700 mb-4">
               <div className="flex flex-col space-y-2">
                 <div className="self-start text-lg text-black rounded-lg">
                   <div className="not-italic text-sm pt-6 pb-2">
                     <motion.div
                       initial={{ opacity: 0, y: 50 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.8 }}
                       className="flex flex-col"
                     >
                       <div className="flex items-start space-x-2">
                         <img
                           src={icon1} // Replace with actual image
                           alt="Profile"
                           className="w-8 h-8 rounded-full"
                         />
                         <div className="bg-gray-100 p-2 rounded-lg">
                           <p>Need any help? Click here!</p>
                         </div>
                       </div>
                       <div className="flex items-start space-x-2 mt-2">
                         <img
                           src={icon1} // Replace with actual image
                           alt="Profile"
                           className="w-8 h-8 rounded-full"
                         />
                         <div className="bg-gray-100 p-2 rounded-lg">
                           <p>How can I help you?</p>
                         </div>
                       </div>
                     </motion.div>
                   </div>
                 </div>

                 {/* Conversation Flow */}
                 {conversation.map((entry, index) => (
                   <div key={index}>
                     {/* User Question */}
                     <div className="flex justify-end space-x-2">
                       <motion.div
                         initial={{ opacity: 0, y: 50 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                         className="flex flex-col"
                       >
                         <p className="bg-gray-300 text-gray-600 text-sm p-2 rounded-md">
                           {entry.question}
                         </p>
                         <p className="text-xs text-gray-400 text-right mt-1">
                           12:00 PM
                         </p>
                       </motion.div>
                     </div>

                     {/* Assistant Answer */}
                     <div className="flex space-x-2">
                       <img
                         src={Avatar}
                         alt="Profile"
                         className="w-8 h-8 rounded-full"
                       />
                       <motion.div
                         initial={{ opacity: 0, y: 50 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                         className="flex flex-col"
                       >
                         <p className="bg-customTeal-950 shadow-sm rounded-md text-white text-sm p-2">
                           {entry.answer}
                         </p>
                         <p className="text-xs text-gray-400 mt-1">12:00 PM</p>
                       </motion.div>
                     </div>
                   </div>
                 ))}

                 {/* Ask Another Question Button */}
                 {conversation.length > 0 &&
                   
                     <button
                       onClick={handleSelectAnotherQuestion}
                       className="text-customTeal-950 text-sm mt-4 hover:underline transition-colors duration-300"
                     >
                       Ask another question
                     </button>
                   }

                 {/* Initial Questions */}
                 {!conversation.length && remainingQuestions.length > 0 && (
                   <ul className="list-none space-y-2 text-black">
                     {remainingQuestions.map((q, index) => (
                       <li key={index}>
                         <button
                           onClick={() => handleSelectQuestion(q)}
                           className="text-customTeal-950 hover:underline"
                         >
                           {q}
                         </button>
                       </li>
                     ))}
                   </ul>
                 )}
               </div>
             </div>
             {/* Input Section */}
             <div className="self-start text-black rounded-lg mt-4">
               <p className="mt-4 text-gray-600 text-xs">
                 Alternatively, send us a message directly on WhatsApp.
               </p>
               <button className="mt-2 flex items-center bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition-colors duration-300">
                 <a
                   href="https://wa.me/+250787042094"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex flex-row justify-center items-center"
                 >
                   <FaWhatsapp className="mr-2" />
                   <p>contact us on WhatsApp</p>
                 </a>
               </button>
             </div>
           </motion.div>
         </div>
       )}
     </div>
   );
 };
 export default WhatsAppChatButton;