import images from './images';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";

const Menu = [
    {
        text: 'About us',
        link: '#team',
    },
    {
        text: 'Services',
        link: '#services',
    },
    {
        text: 'Use Cases',
        link: '#use-cases',
    },
    {
        text: 'Process',
        link: '#process',
    },

    {
        text: 'Testimonials',
        link: '#testimonials',
    },
    {
        text: 'Request a quote',
        link: '#quote',
    }
];
const ServicesData = [
    {
        titleone: 'Search engine',
        titletwo: 'optimization',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services01,
    },
    {
        titleone: 'Pay-per-click',
        titletwo: 'advertising',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services02,
    },
    {
        titleone: 'Social Media',
        titletwo: 'Marketing',
        link: '#',
        itemclass: 'bdark',
        imgURL: images.services03,
    },
    {
        titleone: 'Email',
        titletwo: 'Marketing',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services04,
    },
    {
        titleone: 'Content',
        titletwo: 'Creation',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services05,
    },
    {
        titleone: 'Analytics and',
        titletwo: 'Tracking',
        link: '#',
        itemclass: 'bdark',
        imgURL: images.services06,
    },
]
const CaseStudies = [
    {
        text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
        link: '#',
    },
    {
        text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
        link: '#',
    },
    {
        text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
        link: '#',
    },
];

const WorkingProcess = [
    {
        title: 'Consultation',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
        title: 'Research and Strategy Development',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
        title: 'Implementation',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
        title: 'Monitoring and Optimization',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
        title: 'Reporting and Communication',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
        title: 'Continual Improvement',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },

];

const Team = [
    {
        name: 'Jeffers Abaga',
        position: 'CEO and Founder',
        info: 'With a proven track record in steering brands towards online excellence, Jeffers is your go-to expert for unleashing the true potential of SEO, PPC, and content strategy',
        foto: images.team01,
        linkedin: '#',
    },
    {
        name: 'Cleve Momanyi',
        position: 'Director of Operations',
        info: 'A seasoned strategist and mastermind of efficiency, our operations maestro ensures every campaign sails smoothly.',
        foto: images.team02,
        linkedin: '#',
    },
    {
        name: 'Michael Wafula',
        position: 'Senior SEO Specialist',
        info: 'Our SEO Specialist is the unsung hero in the digital saga, orchestrating a symphony of keywords and algorithms to propel your brand to the forefront',
        foto: images.team03,
        linkedin: '#',
    },
    {
        name: 'Emily Mwangi',
        position: 'PPC Manager',
        info: ' Step into the realm of effective PPC strategies and witness your business soar to new heights under the guidance of our PPC virtuoso.',
        foto: images.team04,
        linkedin: '#',
    },
    {
        name: 'Brian Omondi',
        position: 'Social Media Specialist',
        info: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
        foto: images.team05,
        linkedin: '#',
    },
    {
        name: 'Sarah Akinyi',
        position: 'Content Creator',
        info: 'Sarah is the creative force behind building your brand\'s social presence. From engaging posts to captivating captions that will leave your audience wanting more, she does it all.',
        foto: images.team06,
        linkedin: '#',
    },

];

const Testimonials = [
    {
        name: 'John Oloo',
        position: 'Marketing Director at Digitech Corp',
        testimonial: '"We have been working with SMS for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
        name: 'Stanley Mwenda',
        position: 'Founder of Qwetu Tech',
        testimonial: "'Choosing SMS for our digital marketing needs was a game-changer! Their SEO strategies propelled us to the top of search results, and the PPC campaigns delivered exceptional ROI. It's a partnership that has truly transformed our online presence'",
    },
    {
        name: 'Mrs.Margaret Muthoni',
        position: 'Marketing Director at KQ',
        testimonial: '"SMS\'s social media magic worked wonders for our brand. Their Social Media Specialist crafted engaging content that resonated with our audience, creating a vibrant online community. Our social metrics have never looked better!"',
    },
    {
        name: 'Moses Keter',
        position: 'Marketing Director at Pendeza Org',
        testimonial: 'We\'ve been with SMS for our email marketing needs, and the results speak volumes. The campaigns they crafted not only drove engagement but also brought in valuable leads. Trustworthy, reliable, and always exceeding expectations.',
    },
];

const FooterLinks = [
    {
        title: "Useful Links",
        links: [
          {
            name: "Content",
            link: "#",
          },
          {
            name: "How it Works",
            link: "#",
          },
          {
            name: "Create",
            link: "#",
          },
          {
            name: "Explore",
            link: "#",
          },
          {
            name: "Terms & Services",
            link: "#",
          },
        ],
      },
      {
        title: "Community",
        links: [
          {
            name: "Help Center",
            link: "#",
          },
          {
            name: "Partners",
            link: "#",
          },
          {
            name: "Suggestions",
            link: "#",
          },
          {
            name: "Blog",
            link: "#",
          },
          {
            name: "Newsletters",
            link: "#",
          },
        ],
      },
      {
        title: "Partner",
        links: [
          {
            name: "Our Partner",
            link: "#",
          },
          {
            name: "Become a Partner",
            link: "#",
          },
        ],
      },
]

export const socialMedia = [
    {
      id: "social-media-1",
      icon: FaInstagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: FaFacebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: BsTwitterX,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: IoLogoLinkedin,
      link: "https://www.linkedin.com/",
    },
  ];

export default { Menu, CaseStudies, WorkingProcess, Team, Testimonials, ServicesData, FooterLinks, socialMedia };