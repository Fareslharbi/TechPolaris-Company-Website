import React from "react";
import Header from "../components_Home_Page/1_header/Header";
import Footer from "../components_Home_Page/10_Footer/Footer";
import DABanner from "./components/1_DA_banner/DA_banner";
import DAWhyDA from "./components/2_DA_whyDA/DA_whyDA";
const DataAnalysisPage = () => {
  return (
    <div>
      <Header />
      <DABanner />
      <DAWhyDA />
      <Footer />
    </div>
  );
};

export default DataAnalysisPage;
