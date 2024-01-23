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
import { useEffect, useState, useRef } from "react";
import Loader from "./components/Loader/Loader";

// Locomotive Scroll
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

// Framer Motion
// import { AnimatePresence } from "framer-motion";

// import ScrollTriggerProxy from "./components/ScrollTrigger/ScrollTrigger";

function App() {
  {
    /* Loader State */
  }
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

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
{/* <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        > */}

        {isLoading ? (
          <Loader />
          ) : (
            <>
          {/* <ScrollTriggerProxy /> */}
          <main data-scroll-container className="container" ref={containerRef}>
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
          </main>
          </>
        )}
        {/* </LocomotiveScrollProvider> */}
      </>

  );
}

export default App;
