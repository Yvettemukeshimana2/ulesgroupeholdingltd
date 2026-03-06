import { Outlet } from "react-router-dom";
 import NavBar from "../Component/NavBar";
 import Footer from "../Component/Footer";
//  import WhatsAppChatButton from "../Component/Whatsapchart";
   
const AppLayout = () => {
  return (
    <div className="max-w-screen-3xl mx-auto flex justify-center flex-col font-lato  dark:bg-dark-background">
     
      <NavBar />
      <div className="">{<Outlet />}</div>
      {/* <WhatsAppChatButton/> */}
      <Footer companyName="ules groupe holding LTD" year={2024} />
    </div>
  );
};
export default AppLayout;
