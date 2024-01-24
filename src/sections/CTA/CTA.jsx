// import React from 'react';
import "./CTA.css";
import { images } from "../../constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const CTA = () => {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {

    const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

    {/* Section to animate in on scroll */}
    tl.fromTo('.cta', { xPercent: -100, y: 50, opacity: 0}, {
      xPercent: 0,
      y: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: '.cta',
        start: 'top 90%',
        end: 'bottom 80%',
        scrub: 1,
        // markers: true,
      },
    })

    {/* Section to animate in on scroll */}


  })



  return (
    <div className="section-padding">
      <div className="row cta">
        <div className="col-lg-8 col-12">
          <h3>Let&apos;s make things happen</h3>

          <p className="pt-2 pb-4">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <a href="mailto:clevemomanyi@gmail.com?subject=Free Proposal Request" target="_blank" rel="noreferrer" >
          <button className="btn-positivus">
            <span>
            Get your free proposal
            </span>
            </button>
          </a>
        </div>
        <div className="col-lg-4 d-lg-flex d-none">
          <img src={images.thingshappen} alt="thingshappen" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
