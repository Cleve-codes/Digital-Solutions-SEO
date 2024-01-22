// import styles from "../style";
// import { logo } from "../assets";
import { data } from '../../constants'
import { images } from '../../constants'

const Footer = () => (
  <section className='section'>
    <div className='container'>
      <div className="logo">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
        <img src={images.logo} alt="logo" className='img-logo'  />
        <h1 className="h1">SM Digital</h1>
      </div>
        <p>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="links">
        {data.FooterLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={index}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 Stats Marketing Services. All Rights Reserved.
      </p>

      {/* Social Media Icons */}
      <div className="flex flex-row md:mt-0 mt-6">
        {/* {data.socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== data.socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))} */}
        {
          data.socialMedia.map((social, index) => {
            return (
            <a key={index} href={social.link} >
              <social.icon
              className={`w-[21px] h-[21px] object-contain cursor-pointer text-white ${
                index !== data.socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
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