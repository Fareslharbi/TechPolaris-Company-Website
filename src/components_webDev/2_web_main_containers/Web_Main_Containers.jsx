import React from "react";
import "./Web_Main_Containers.css";
import { useNavigate } from "react-router-dom";
import img1 from "./WebSlide1.jpg";
import img2 from "./User-Experience-Design.jpg";
import img3 from "./SEOslide2.jpg";
import img4 from "./Captivating-Content.jpg";
import img5 from "./Web-Security.jpg";
import img6 from "./Website-Analytics.jpg";

const Web_Main_Containers = () => {
  const navigate = useNavigate();

  const navigateContact = () => {
    navigate("/contact");
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row text-center row_webdev">
          <div className="col-12 bg-light p-4">
            <div className="child">
              <h1>Website Design</h1>
              <div className="d-flex webdev_flex">
                <p>
                  For businesses in nearly all industries, the company website
                  has become the focal point of their online marketing strategy
                  and for good reason. Gone are the days of the stand-alone
                  website whose sole purpose was simply to have an attractive
                  platform for potential and current customers to navigate
                  around. Nowadays, a company’s website serves as an integrated
                  hub that connects all other online marketing efforts (social
                  media, citations, partners, backlinks, etc.) and ties them
                  together in a strategic manner. The way in which the value
                  proposition of your website is displayed to consumers can be
                  the diference between the success and failure of your
                  business. Latest project: Thomas McCarter Law
                </p>
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="child">
              <h1>We Design with User Experience in Mind</h1>
              <div className="d-flex webdev_flex">
                <img src={img2} alt="" />
                <p>
                  For businesses in nearly all industries, the company website
                  has become the focal point of their online marketing strategy
                  and for good reason. Gone are the days of the stand-alone
                  website whose sole purpose was simply to have an attractive
                  platform for potential and current customers to navigate
                  around. Nowadays, a company’s website serves as an integrated
                  hub that connects all other online marketing efforts (social
                  media, citations, partners, backlinks, etc.) and ties them
                  together in a strategic manner. The way in which the value
                  proposition of your website is displayed to consumers can be
                  the diference between the success and failure of your
                  business. Latest project: Thomas McCarter Law
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 bg-light p-4">
            <div className="child">
              <h1>SEO-Optimized Web Design</h1>
              <div className="d-flex webdev_flex">
                <p>
                  For businesses in nearly all industries, the company website
                  has become the focal point of their online marketing strategy
                  and for good reason. Gone are the days of the stand-alone
                  website whose sole purpose was simply to have an attractive
                  platform for potential and current customers to navigate
                  around. Nowadays, a company’s website serves as an integrated
                  hub that connects all other online marketing efforts (social
                  media, citations, partners, backlinks, etc.) and ties them
                  together in a strategic manner. The way in which the value
                  proposition of your website is displayed to consumers can be
                  the diference between the success and failure of your
                  business. Latest project: Thomas McCarter Law
                </p>
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="child">
              <h1>Compelling Content</h1>
              <div className="d-flex webdev_flex">
                <img src={img4} alt="" />
                <p>
                  For businesses in nearly all industries, the company website
                  has become the focal point of their online marketing strategy
                  and for good reason. Gone are the days of the stand-alone
                  website whose sole purpose was simply to have an attractive
                  platform for potential and current customers to navigate
                  around. Nowadays, a company’s website serves as an integrated
                  hub that connects all other online marketing efforts (social
                  media, citations, partners, backlinks, etc.) and ties them
                  together in a strategic manner. The way in which the value
                  proposition of your website is displayed to consumers can be
                  the diference between the success and failure of your
                  business. Latest project: Thomas McCarter Law
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 bg-light p-4">
            <div className="child">
              <h1>Website Security and Maintenance</h1>
              <div className="d-flex webdev_flex">
                <p>
                  For businesses in nearly all industries, the company website
                  has become the focal point of their online marketing strategy
                  and for good reason. Gone are the days of the stand-alone
                  website whose sole purpose was simply to have an attractive
                  platform for potential and current customers to navigate
                  around. Nowadays, a company’s website serves as an integrated
                  hub that connects all other online marketing efforts (social
                  media, citations, partners, backlinks, etc.) and ties them
                  together in a strategic manner. The way in which the value
                  proposition of your website is displayed to consumers can be
                  the diference between the success and failure of your
                  business. Latest project: Thomas McCarter Law
                </p>
                <img src={img5} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="child">
              <h1>Website Analytics</h1>
              <div className="d-flex webdev_flex">
                <img src={img6} alt="" />
                <p>
                  For businesses in nearly all industries, the company website
                  has become the focal point of their online marketing strategy
                  and for good reason. Gone are the days of the stand-alone
                  website whose sole purpose was simply to have an attractive
                  platform for potential and current customers to navigate
                  around. Nowadays, a company’s website serves as an integrated
                  hub that connects all other online marketing efforts (social
                  media, citations, partners, backlinks, etc.) and ties them
                  together in a strategic manner. The way in which the value
                  proposition of your website is displayed to consumers can be
                  the diference between the success and failure of your
                  business. Latest project: Thomas McCarter Law
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 bg-light p-4">
            <div className="child px-5 mx-5">
              <button
                className="btn bg-dark text-light mb-5"
                onClick={navigateContact}
              >
                Affordable Web Design Services
              </button>
              <h3>
                Some key aspects we take into consideration when working on the
                website design portion of the online presence for our clients
                include, but are not limited to:
              </h3>
              <ul className="list_webdiv">
                <li>
                  <span>Mobile Optimization:</span> As more and more people
                  access the internet through their mobile devices, it’s
                  essential to ensure your website is mobile-friendly. We
                  accomplish this using responsive design, optimizing images,
                  and ensuring the website’s structure is optimized for mobile
                  devices.
                </li>
                <li>
                  <span>Page Speed:</span>Slow-loading pages can harm user
                  experience and lower search engine rankings. To improve page
                  speed, we minimize the number of HTTP requests, compress
                  images, and optimize code.
                </li>
                <li>
                  <span>User Experience (UX):</span>We focus on creating an
                  intuitive, easy-to-use interface that provides a great user
                  experience. This includes simplifying navigation, providing
                  clear and concise content, and using intuitive design
                  patterns.
                </li>
                <li>
                  <span>Accessibility:</span>Making your website accessible to
                  all users, including those with disabilities, is crucial. We
                  have the know-how to use descriptive alt tags for images,
                  providing transcripts for audio and video content, and ensure
                  the website is navigable via keyboard.
                </li>
                <li>
                  <span>Content Quality:</span>It’s vital to ensure your website
                  has high-quality content that is relevant, informative, and
                  engaging. This can help improve user experience and boost
                  search engine rankings and we’re known in the North Jersey
                  region to be superior in content creation and creative
                  writing.
                </li>
                <li>
                  <span>Security:</span>Protecting your website from hacking
                  attempts and other security threats is essential. We implement
                  SSL encryption, use secure passwords, and keep software up to
                  date so that we can help improve security optimally.
                </li>
                <li>
                  <span>Social Media Integration:</span>Integrating social media
                  into your website can help improve user engagement and boost
                  search engine rankings. This is why we always add social media
                  icons and display social media feeds on your website.
                </li>
                <li>
                  <span>Local SEO:</span>For businesses that operate in specific
                  locations, optimizing for local search is critical. This
                  includes using location-based keywords, claiming your Google
                  My Business listing, and getting listed in online directories.
                  We have been specializing in all of the aforementioned
                  techniques for over a decade now.
                </li>
              </ul>
              <button
                className="btn bg-dark text-light mt-5"
                onClick={navigateContact}
              >
                Affordable Web Design Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web_Main_Containers;
