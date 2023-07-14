import "./AboutUs.css";
import Header from "../components_Home_Page/1_header/Header";
import Footer from "../components_Home_Page/10_Footer/Footer";
const AboutUs = () => {
  return (
    <div>
      <Header />
      <div id="aboutUs-container" class="container bg-light my-5 ">
        <div class="row">
          <p className="text-center">
            The National Company for Mechanical Systems (NCMS) is a Saudi
            Company seeking to localize technology and actively participate in
            the national efforts towards a knowledge-based economy that aims to
            achieve the Vision 2030 of Saudi Arabia. The company aims to possess
            the necessary technical capabilities to provide its customers with
            mechanical and optical parts manufacturing services and to provide
            environmental and engineering tests. The company has implanted a
            Saudi nationalization scheme, including the following fields:
            designing, manufacturing, analyzing, and testing. In addition to
            integrated logistical support through advanced factories and labs,
            advanced factories and labs have been the driving force behind the
            growth. These factories and labs are as follows:​
          </p>
          <div class="container py-5">
            <div class="row align-items-start">
              <div class="col-lg-6 col-sm-12  mb-5">
                <h1 className="d-flex align-items-center gap-5 justify-content-center">
                  <div class="triangle"></div>MISSION
                </h1>
                <p>
                  We bridge innovation to production effectively and with the
                  financial feasibility to meet our customer's and partner's
                  expectations based on our knowledge and expertise by Saudi
                  talents to contribute to the nationalization of high-tech
                  industries
                </p>
              </div>
              <div class="col-lg-6 col-sm-12  mb-5">
                <h1 className="d-flex align-items-center gap-5 justify-content-center">
                  <div class="triangle"></div>VISION
                </h1>
                <p>To be the national bridging hub​</p>
              </div>
              <div class="col-lg-6 col-sm-12  mb-5">
                <h1 className="d-flex align-items-center gap-5 justify-content-center">
                  <div class="triangle"></div>Innovation
                </h1>
                <p>
                  We apply excellence in operation, attract ideas, and best
                  practices to build innovation.
                </p>
              </div>
              <div class="col-lg-6 col-sm-12  mb-5">
                <h1 className="d-flex align-items-center gap-5 justify-content-center">
                  <div class="triangle"></div>Teamwork
                </h1>
                <p>We collaborate to gain the best results from projects.</p>
              </div>
              <div class="col-lg-6 col-sm-12  mb-5">
                <h1 className="d-flex align-items-center gap-5 justify-content-center">
                  <div class="triangle"></div>Customer Focus
                </h1>
                <p>
                  We partner with our customers to meet their needs and more
                  than their expectation.
                </p>
              </div>
              <div class="col-lg-6 col-sm-12  mb-5">
                <h1 className="d-flex align-items-center gap-5 justify-content-center">
                  <div class="triangle"></div>Reliability
                </h1>
                <p>
                  Continuous operation to produce services and products in time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
