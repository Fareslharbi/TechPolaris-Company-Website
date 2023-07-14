import "./Home_Page.css";
import Header from "./1_header/Header";
import Swiper from "./2_swiper/Swiper";
import Cards from "./3_card/Cards";
import Banner from "./4_banner/Banner";
import WhyUs from "./5_why_us/WhyUs";
import Portfolio from "./6_portfolio/Portfolio";
import TrackRecord from "./7_track_record/TrackRecord";
import Testimonial from "./8_testimonial/Testimonial";
import Footer from "./10_Footer/Footer";
const Home_Page = () => {
  return (
    <div className="main_app">
      <Header />
      <Swiper />
      <Cards />
      <Banner />
      <WhyUs />
      <Portfolio />
      <TrackRecord />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home_Page;
