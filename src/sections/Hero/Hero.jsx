import images from "../../constants/images";
import "./Hero.css";
import IconScroll from "../../components/IconScroll/IconScroll";
import gsap from 'gsap'
// import { useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";

const logos = ["logo01", "logo02", "logo03", "logo04", "logo05", "logo06"];

const Hero = () => {


  {/* Animations with GSAP  */}
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

    if (window.innerWidth < 768) {
      // Animation for smaller screens
      tl.fromTo('.title', { opacity: 0, y: +50}, { opacity: 1, y: 0, duration: 1.5 })
        .fromTo('.py-4', { opacity: 0, y: +50}, { opacity: 1, y: 0, duration: 1.5 }, "-=1.0")
        .fromTo('.btn-positivus', { opacity: 0, y: +50}, { opacity: 1, y: 0, duration: 1 }, "-=.9")
        .fromTo('.img-fluid', {scale: 0, opacity: 0}, {scale: 1, opacity: 1, duration: 1, ease: 'back.inOut'})
        .fromTo('.clients img', { opacity: 0, y: +50}, { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, "-=1.5");
    } else {
      // Animation for larger screens
      tl.fromTo('.title', { opacity: 0, y: +50}, { opacity: 1, y: 0, duration: 1.5 })
        .fromTo('.py-4', { opacity: 0, y: +50}, { opacity: 1, y: 0, duration: 1.5 }, "-=1.0")
        .fromTo('.btn-positivus', { opacity: 0, y: +50}, { opacity: 1, y: 0, duration: 1 }, "-=.9")
        .fromTo('.img-fluid', {scale: 0, opacity: 0}, {scale: 1, opacity: 1, duration: 1, ease: 'back.inOut', delay: 0.5})
        .fromTo('.clients img', { opacity: 0, y: +50}, { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, "-=1.5");
    }
  });

  return (
    <div data-scroll-section className="hero">
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <h1 className="title">
            Transforming
            <br />
            <span className="text-gradient">Businesses </span>
            In The Digital Era{" "}
          </h1>
          <p className="py-4">
            Dive into digital success with Stats Marketing Services (SMS), where
            innovation meets impact, and your brand takes center stage in the
            online spotlight.
          </p>
          <button className="btn-positivus">
            <span>Book a Consultation</span>
          </button>
        </div>
        <div className="col-md-6 col-12 mt-md-0 mt-4">
          <img className="img-fluid" src={images.hero} alt="design" />
        </div>
      </div>

      <div className="clients">
        {logos.map((logo, index) => (
          <img key={index} src={images[logo]} alt={images[logo]} />
        ))}
      </div>
      <IconScroll />
    </div>
  );
};

export default Hero;
