import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu/Menu";
import Hero from "./sections/Hero/Hero";
import Services from "./sections/services/Services";
import CTA from "./sections/CTA/CTA";
import CaseStudies from "./sections/CaseStudies/CaseStudies";
import Process from "./sections/Process/Process";
import Team from "./sections/Team/Team";
import Testimonials from "./sections/Testimonials/Testimonials";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  {
    /* Loader State */
  }
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fakeFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeFetch();
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <Menu />
          <Hero />
          <Services />
          <CTA />
          <CaseStudies />
          <Process />
          <Team />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
