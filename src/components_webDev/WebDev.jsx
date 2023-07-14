import React from "react";
import Header from "../components_Home_Page/1_header/Header";
import WebMainBanner from "./1_web_main_banner/Web_Main_Banner";
import Footer from "../components_Home_Page/10_Footer/Footer";
import WebMainContainers from "./2_web_main_containers/Web_Main_Containers";
const WebDev = () => {
  return (
    <div>
      <Header />
      <WebMainBanner />
      <WebMainContainers />
      <Footer />
    </div>
  );
};

export default WebDev;
