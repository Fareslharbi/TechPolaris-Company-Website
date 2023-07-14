import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components_Home_Page/Home_Page";
import Contact from "./components_Contact/Contact";
import Founder from "./tech_polaris_founder/Founder";
import AboutUs from "./components_aboutUs/AboutUs";
import ThreeDPage from "./components_3D/ThreeDPage";
import DataAnalysisPage from "./components_DataAnalysis/DataAnalysisPage";
import NewsPage from "./components_News/NewsPage";
import WebDev from "./components_webDev/WebDev";
const website = () => {
  // Change the function name to uppercase "Website"
  return (
    <Router>
      <div className="main_app">
        <Routes>
          <Route
            exact
            path="/TechPolaris-Company-Website"
            element={<HomePage />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/3DPage" element={<ThreeDPage />} />
          <Route exact path="/DataAnalysis" element={<DataAnalysisPage />} />
          <Route exact path="/NewsPage" element={<NewsPage />} />
          <Route exact path="/WebDev" element={<WebDev />} />
          {/* Define the route for Contact */}
        </Routes>
      </div>
    </Router>
  );
};

export default website; // Export the uppercase "Website"
