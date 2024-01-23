import { data } from '../../constants'
import { images } from '../../constants'
import './Footer.css'

const Footer = () => (
  <section className='footer__section'>
    <div className='footer__container'>
      <div className="logo">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
        <img src={images.logo} alt="logo" className='img-logo'  />
        <h1 className="h1">SMS Digital</h1>
      </div>
        <p>
          A new way to make the payments easy, reliable and secure.
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