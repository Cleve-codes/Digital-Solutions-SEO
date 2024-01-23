// import React from 'react'
import Headings from "../../components/Headings/Headings";
import { data } from "../../constants";
import { BsLinkedin } from "react-icons/bs";
import "./Team.css";

const Team = () => {
  return (
    <div className="section-padding">
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
      </div>
    </div>
  );
};

export default Team;
