// import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { data } from '../../constants';
import Headings from '../../components/Headings/Headings';
import './Process.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Process = () => {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {

    const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

    {/* Section to animate in on scroll */}

    tl.fromTo('#process .headings', { y: 50, opacity: 0}, {
      y: 0,
      opacity: 1,
      delay: 0.5,
      duration: 2,
      scrollTrigger: {
        trigger: '#process',
        start: 'top 90%',
        end: 'bottom 80%',
        scrub: 1,
        // markers: true,
      },
    }).fromTo('.accordion-item', { y: 50, opacity: 0}, {
      y: 0,
      opacity: 1,
      delay: 0.5,
      stagger: 0.2,
      duration: 2,
      scrollTrigger: {
        trigger: '#process',
        start: 'top 90%',
        end: 'bottom 80%',
        scrub: 1,
        // markers: true,
      },
    })

    {/* Section to animate in on scroll */}

  })


  return (
    <div className="section-padding" id="process">
      <Headings title="Our Working Process " text="Step-by-Step Guide to Achieving Your Business Goals" />

      <Accordion>
        {data.WorkingProcess.map((item, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header><div><span>{index + 1 }</span> {item.title}</div></Accordion.Header>
            <Accordion.Body>
              <p> {item.description}  </p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

export default Process