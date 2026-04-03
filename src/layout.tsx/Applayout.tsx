import { Outlet } from "react-router-dom";
 import NavBar from "../Component/NavBar";
 import Footer from "../Component/Footer";
//  import WhatsAppChatButton from "../Component/Whatsapchart";
   
const AppLayout = () => {
  return (
    <div className="max-w-screen-3xl mx-auto flex justify-center flex-col font-lato min-w-0 dark:bg-dark-background">
      <NavBar />
      <main className="min-w-0 pt-16 sm:pt-20">
        <Outlet />
      </main>
      {/* <WhatsAppChatButton/> */}
      <Footer companyName="ules groupe holding LTD" year={2024} />
    </div>
  );
};
export default AppLayout;
