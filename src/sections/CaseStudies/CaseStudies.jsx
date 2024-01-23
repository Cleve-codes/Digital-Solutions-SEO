// import React from 'react'
import Headings from "../../components/Headings/Headings";
import IconScroll from "../../components/IconScroll/IconScroll";
import { data } from "../../constants";
import "./CaseStudies.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import { FiArrowUpRight } from "react-icons/fi";

const CaseStudies = () => {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {

      const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

      {/* Section to animate in on scroll */}
      tl.fromTo('#use-cases .headings', { y: 50, opacity: 0}, {
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 2,
        scrollTrigger: {
          trigger: '.case-studies',
          start: 'top 90%',
          end: 'bottom 80%',
          scrub: 1,
          // markers: true,
        },
      }).fromTo('.case-studies div', { y: 50, opacity: 0}, {
        y: 0,
        opacity: 1,
        delay: 0.5,
        stagger: 0.2,
        duration: 2,
        scrollTrigger: {
          trigger: '.case-studies',
          start: 'top 90%',
          end: 'bottom 80%',
          scrub: 1,
          // markers: true,
        },
      })

      {/* Section to animate in on scroll */}
  })


  return (
    <div className="section-padding" id="use-cases">
      <Headings
        title="Case Studies"
        text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className="case-studies">
        {data.CaseStudies.map(({ text, link }, index) => (
          <div key={index} className="case-studies-item">
            <p>{text}</p>
            <a href={link}>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Learn More</span>
            </button>
            </a>
          </div>
        ))}
      </div>

      <IconScroll />
    </div>
  );
};

export default CaseStudies;
