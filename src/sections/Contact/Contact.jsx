// import React from 'react'
import Headings from "../../components/Headings/Headings";
import "./Contact.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Contact = () => {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.fromTo('#contact .headings', { y: 50, opacity: 0}, {
      y: 0,
      opacity: 1,
      delay: 0.5,
      duration: 2,
      scrollTrigger: {
        trigger: '#quote',
        start: 'top 90%',
        end: 'bottom 70%',
        scrub: 1,
        // markers: true,
      },
    }).fromTo('.contact', {
      scale: 0,
      opacity: 0,
    }, {
      scale: 1,
      opacity: 1,
      delay: 1,
      duration: 2,
      scrollTrigger: {
        trigger: '#quote',
        start: 'top 90%',
        end: 'bottom 80%',
        scrub: 1,
        // markers: true,
      }
    }).fromTo('form div', {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: '#quote',
        start: 'top 90%',
        end: 'bottom bottom',
        scrub: 1,
        // markers: true,
      }
    })

  })

  return (
    <div id='contact' className="section-padding">
      <Headings
        title="Contact Us"
        text="Connect with Us: Let's  Discuss Your Digital Marketing Needs"
      />

      <div className="contact" id="quote">
        <div className="row">
          <div className="col-md-6 col-12">
            <form>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Say Hi
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Get a Quote
                </label>
              </div>

              <div className="form-group">
                <label>Name*</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label>Email*</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1"> Message*</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button className="contact__button" >
                <span>Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
