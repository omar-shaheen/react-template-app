import React, { Component } from "react";
import "./style.css";

class ContactUs extends Component {
  render() {
    return (
      <div id="contact" className="sec-contact-us px-3 py-5" style={{ backgroundImage: `url('/imgs/slides/1.jpg')` }}>

        <div className="sec-title text-center pt-5 mb-5">
          <strong className="h1 d-block">Get In Touch</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            ratione.
          </p>
        </div>

        <div className="form-contact mt-5">
          <form action="" className="wow bounceIn">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-4">
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-4">
                  <label htmlFor="">E-Mail</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-Mail"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-4">
                  <label htmlFor="">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-4">
                  <label htmlFor="">Message</label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-4">
                  <button type="submit" className="btn-submit">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactUs;
