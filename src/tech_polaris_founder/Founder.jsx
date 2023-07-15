import "./Founder.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useNavigate } from "react-router-dom";
const Founder = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/TechPolaris-Company-Website");
  };
  return (
    <div className="techPolarisFounder">
      <button
        id="goBackID"
        onClick={navigateHome}
        className="btn btn-primary mt-2 ms-2"
      >
        Go back to TechPolaris Website
      </button>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Founder;
