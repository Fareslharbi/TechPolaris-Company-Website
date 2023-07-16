import React from "react";
import Header from "../components_Home_Page/1_header/Header";
import Footer from "../components_Home_Page/10_Footer/Footer";
import DABanner from "./components/1_DA_banner/DA_banner";
import DAWhyDA from "./components/2_DA_whyDA/DA_whyDA";
import DASecBanner from "./components/3_DA_banner/DA_sec_banner";
import DAServices from "./components/4_DA_services/DA_services";
import DAThirdBanner from "./components/5_DA_banner/DA_third_banner";
const DataAnalysisPage = () => {
  return (
    <div>
      <Header />
      <DABanner />
      <DAWhyDA />
      <DASecBanner />
      <DAServices />
      <DAThirdBanner />
      <Footer />
    </div>
  );
};

export default DataAnalysisPage;
