// import React from 'react'
import Headings from "../../components/Headings/Headings";
import IconScroll from "../../components/IconScroll/IconScroll";
import { data } from "../../constants";
import "./CaseStudies.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
// import { FiArrowUpRight } from "react-icons/fi";

const CaseStudies = () => {
  const [modalShow, setModalShow] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 2 },
    });

    {
      /* Section to animate in on scroll */
    }
    tl.fromTo(
      "#use-cases .headings",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 2,
        scrollTrigger: {
          trigger: ".case-studies",
          start: "top 90%",
          end: "bottom 80%",
          scrub: 1,
          // markers: true,
        },
      }
    ).fromTo(
      ".case-studies div",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        stagger: 0.2,
        duration: 2,
        scrollTrigger: {
          trigger: ".case-studies",
          start: "top 90%",
          end: "bottom 80%",
          scrub: 1,
          // markers: true,
        },
      }
    );

    {
      /* Section to animate in on scroll */
    }
  });

  return (
    <div className="section-padding" id="use-cases">
      <Headings
        title="Case Studies"
        text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className="case-studies">
        {data.CaseStudies.map(({ text }, index) => (
          <div key={index} className="case-studies-item">
            <p>{text}</p>

            <a>
              <button onClick={() => setModalShow(true)} className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </a>
          </div>
        ))}
      </div>

      {/* <VerticalModal */}

      <VerticalModal show={modalShow} onHide={() => setModalShow(false)} />

      <IconScroll />
    </div>
  );
};

export default CaseStudies;

const VerticalModal = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Case Study
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            For a B2B software enterprise, our dedicated efforts in devising and
            implementing an effective SEO strategy yielded remarkable results.
            The outcome was not only achieving a prominent first-page ranking
            for crucial keywords but also witnessing an extraordinary surge of
            200% in organic traffic. Our tailored approach to search engine
            optimization not only boosted visibility but also significantly
            enhanced the online presence and reach of the company within its
            target audience
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
