import React from "react";
import ContactUs from "./ContactUs";
import Featured from "./Featured";
import Footer from "./Footer";
import Hero from "./Hero";
import Keepers from "./Keepers";

const Main = () => {
   return (
      <div className="main">
         <Hero />
         <Featured />
         <Keepers />
         <ContactUs />
         <Footer />
      </div>
   );
};

export default Main;
