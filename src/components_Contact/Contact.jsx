import React from "react";
import Header from "../components_Home_Page/1_header/Header";
import Footer from "../components_Home_Page/10_Footer/Footer";
// import Banner from "../components_Home_Page/4_banner/Banner";

const Contact = () => {
  return (
    <div className="page-component bg-light">
      <Header />
      <div class="container bg-light mt-5 pt-5">
        <div class="text-center">
          <p className="lead fs-4 text-dark">
            Whether you are seeking consulting guidance or hands-on marketing,
            we’re here to help you get your business the design and visibility
            it deserves. Include you phone number if you prefer to be called
            rather than emailed and let’s start the conversation.
          </p>
          <h2>Get in touch</h2>
          <p class="lead">Questions? Do not hesitate to contact us.</p>
        </div>
        <div class="row justify-content-center my-5">
          <div class="col-lg-6">
            <form action="">
              <label for="email" class="form-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="my@email.com"
                class="form-control"
              />
              <label for="phone" class="form-label mt-4">
                Phone:
              </label>
              <input
                type="phone"
                id="phone"
                placeholder="+966 560748481"
                class="form-control"
              />
              <div class="form-floating my-5">
                <input
                  type="name"
                  id="name"
                  placeholder="e.g. Dawid"
                  class="form-control"
                />
                <label for="name" class="form-label">
                  Name:
                </label>
              </div>
              <label for="subject" class="form=label">
                Subject
              </label>
              <select name="subject" id="subject" class="form-select">
                <option value="Web Development" selected>
                  Web Development
                </option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="3D Design & Printing">
                  3D Design & Printing
                </option>
                <option value="Photography Videography">
                  Photography Videography
                </option>
              </select>

              <div class="form-floating my-5">
                <textarea
                  name="query"
                  id="query"
                  class="form-control"
                  placeholder="Write a message"
                ></textarea>

                <label for="query">Write a message</label>
              </div>

              <div class="text-center">
                <button type="submit" class="btn btn-dark">
                  Send!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
