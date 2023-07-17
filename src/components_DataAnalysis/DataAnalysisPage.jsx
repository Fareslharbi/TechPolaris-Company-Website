import React from "react";
import Header from "../components_Home_Page/1_header/Header";
import DAHeader from "./components/0_1_DA_header/DA_Header";
import Footer from "../components_Home_Page/10_Footer/Footer";
import DABanner from "./components/1_DA_banner/DA_banner";
import DAWhyDA from "./components/2_DA_whyDA/DA_whyDA";
import DASecBanner from "./components/3_DA_banner/DA_sec_banner";
import DAServices from "./components/4_DA_services/DA_services";
import DAThirdBanner from "./components/5_DA_banner/DA_third_banner";
import DAWhyUS from "./components/6_DA_WhyUS/DA_WhyUS";
const DataAnalysisPage = () => {
  return (
    <div>
      <DAHeader />
      <DABanner />
      <DAWhyDA />
      <DASecBanner />
      <DAServices />
      <DAThirdBanner />
      <DAWhyUS />
      <Footer />
    </div>
  );
};

export default DataAnalysisPage;
