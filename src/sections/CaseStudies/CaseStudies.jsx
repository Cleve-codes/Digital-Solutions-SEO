// import React from 'react'
import Headings from "../../components/Headings/Headings";
import IconScroll from "../../components/IconScroll/IconScroll";
import { data } from "../../constants";
import "./CaseStudies.css";
// import { FiArrowUpRight } from "react-icons/fi";

const CaseStudies = () => {
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
