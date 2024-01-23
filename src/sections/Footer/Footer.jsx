import { data } from '../../constants'
import { images } from '../../constants'
import './Footer.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Footer = () => (

  gsap.registerPlugin(ScrollTrigger),

  useGSAP(() => {

      const tl = gsap.timeline({ defaults: { ease: 'power4.Out', duration: 2 }});

      tl.fromTo('.footer__section .logo', {
        y: 50,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 2,
        scrollTrigger: {
          trigger: '.contact',
          start: '80% center',
          end: '20% center',
          scrub: 1,
          // markers: true,
        },
      }).fromTo('.links', {
        y: 50,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        delay: 1,
        stagger: 0.5,
        duration: 2,
        scrollTrigger: {
          trigger: '.contact',
          start: '80% center',
          end: '20% center',
          scrub: 1,
          // markers: true,
        }
      }).fromTo('.hr', {
        y: 50,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: '.contact',
          start: '80% center',
          end: '20% center',
          scrub: 1,
          // markers: true,
        }
      }).fromTo('.footer__foot, .right, .footer__social-links', {
        y: 50,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        stagger: .2,
        delay: 4,
        duration: 2,
        scrollTrigger: {
          trigger: '.contact',
          start: '80% center',
          end: '20% center',
          scrub: 1,
          // markers: true,
        }
      })

    }),

  <section className='footer__section'>
    <div className='footer__container'>
      <div className="logo">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
        <img src={images.logo} alt="logo" className='img-logo'  />
        <h1 className="h1">SMS Digital</h1>
      </div>
        <p>
        Transforming Your Digital Landscape: Making Marketing Effortless, Reliable, and Secure.
        </p>
      </div>

      <div className="links">
        {data.FooterLinks.map((footerlink) => (
          <div key={footerlink.title}
          >
            <h4
            >
              {footerlink.title}
            </h4>
            <ul
            >
              {footerlink.links.map((link, index) => (
                <li
                  key={index}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>


    <div
    className='hr'
    ></div>

    {/* Footer Bottom */}

    <div className='footer__foot'>
      <div className='right'>
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 SMS. All Rights Reserved.
      </p>
      </div>

      {/* Social Media Icons */}
      <div className="footer__social-links">
        {
          data.socialMedia.map((social, index) => {
            return (
            <a key={index} href={social.link} target='_blank' rel='noreferrer' >
              <social.icon
              className='icon'
              onClick={() => window.open(social.link)}
               />
              </a>
            )
          })
        }
      </div>
    </div>
  </section>
);

export default Footer;