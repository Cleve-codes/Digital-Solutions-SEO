// import React from 'react'
import Headings from "../../components/Headings/Headings";
import { data } from "../../constants";
import { BsLinkedin } from "react-icons/bs";
import "./Team.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const  Team = () => {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.fromTo('#section .headings', { y: 50, opacity: 0}, {
      y: 0,
      opacity: 1,
      delay: 0.5,
      duration: 2,
      scrollTrigger: {
        trigger: '#section',
        start: 'top 90%',
        end: 'bottom 70%',
        scrub: 1,
        // markers: true,
      },
    }).fromTo('.row .card-team', {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      delay: 1,
      stagger: 0.2,
      duration: 2,
      scrollTrigger: {
        trigger: '#section',
        start: 'top 90%',
        end: 'bottom 80%',
        scrub: 1,
        // markers: true,
      }
    }).fromTo('.team__button', {
      y: 50,
      opacity: 0,
      scale: 0,
    }, {
      y: 0,
      scale: 1,
      opacity: 1,
      delay: 2,
      duration: 3,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.card-team:last-child',
        start: 'bottom 80%',
        end: '700 center',
        scrub: 1,
        // markers: true,
      }
    })

  })


  return (
    <div id="section" className="section-padding">
      <Headings
        title="Team"
        text="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />

      <div className="row">
        {data.Team.map(({ name, position, info, foto, linkedin }, index) => (
          <div className="col-lg-4 col-md-6 col-12" key={index}>
            <div className="card-team">
              <div className="card-team-header">
                {" "}
                <img src={foto} alt={name} />
                <p>
                  {" "}
                  <span>{name}</span>
                  {position}
                </p>
                <a href={linkedin} alt={`Linkedin + ${name}`}>
                  <BsLinkedin />
                </a>
              </div>
              <p>{info}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex mt-2 justify-content-md-end justify-content-center">
        <a href="#contact">
        <button alt="meet the squad" className="team__button">
          <i>m</i>
          <i>e</i>
          <i>e</i>
          <i>t</i>
          <i>&nbsp;</i>
          <i>t</i>
          <i>h</i>
          <i>e</i>
          <i>&nbsp;</i>
          <i>s</i>
          <i>q</i>
          <i>u</i>
          <i>a</i>
          <i>d</i>
        </button>
        </a>
      </div>
    </div>
  );
};

export default Team;
