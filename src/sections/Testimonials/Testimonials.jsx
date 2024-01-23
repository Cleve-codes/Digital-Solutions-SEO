// import React from 'react'
import Headings from "../../components/Headings/Headings";
import { data } from "../../constants";
import Carousel from "react-bootstrap/Carousel";
import "./Testimonials.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Testimonials = () => {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {

    const tl = gsap.timeline();

    tl.fromTo('#testimonials .headings', {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      delay: 0.5,
      duration: 2,
      scrollTrigger: {
        trigger: '#testimonials',
        start: 'top 90%',
        end: 'bottom 70%',
        scrub: 1,
        // markers: true,
      },
    }).fromTo('.carousel-bg', {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: '#testimonials',
        start: 'top 90%',
        end: 'bottom 80%',
        scrub: 1,
        // markers: true,
      }
    })

  })

  return (
    <div className="section-padding" id="testimonials">
      <Headings
        title="Testimonials"
        text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />

      <div className="carousel-bg">
        <Carousel id="carousel">
          {data.Testimonials.map((item, index) => (
            <Carousel.Item className="carousel-box" interval={6000} key={index}>
              <Carousel.Caption>
                <p className="speech-bubble"> {item.testimonial}</p>
                <div className="carousel-name">{item.name}</div>
                <div className="carousel-position">{item.position}</div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
