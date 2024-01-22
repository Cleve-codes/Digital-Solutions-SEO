import images from "../../constants/images";
import "./Hero.css";
import IconScroll from "../../components/IconScroll/IconScroll";

const logos = ["logo01", "logo02", "logo03", "logo04", "logo05", "logo06"];

const Hero = () => {
  return (
    <div className="hero">
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
