import React from "react";
import DAHeader from "./components/0_DA_header/DA_Header";
import DABanner from "./components/1_DA_banner/DA_banner";
import DAWhyDA from "./components/2_DA_whyDA/DA_whyDA";
import DASecBanner from "./components/3_DA_banner/DA_sec_banner";
import DAServices from "./components/4_DA_services/DA_services";
import DAThirdBanner from "./components/5_DA_banner/DA_third_banner";
import DAWhyUS from "./components/6_DA_WhyUS/DA_WhyUS";
import DAExtra from "./components/7_DA_Extra/DA_Extra";
import DAFooter from "./components/8_DA_Footer/DA_Footer";
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
      <DAExtra />
      <DAFooter />
    </div>
  );
};

export default DataAnalysisPage;
