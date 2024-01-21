// import React from 'react'
import Headings from "../../components/Headings/Headings";
import { data } from "../../constants";
import Carousel from "react-bootstrap/Carousel";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="section-padding" id="testimonials">
      <Headings
        title="Testimonials"
        text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />

      <div className="carousel-bg">
        <Carousel>
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