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
        info: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        foto: images.team01,
        linkedin: '#',
    },
    {
        name: 'Cleve Momanyi',
        position: 'Director of Operations',
        info: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
        foto: images.team02,
        linkedin: '#',
    },
    {
        name: 'Michael Wafula',
        position: 'Senior SEO Specialist',
        info: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
        foto: images.team03,
        linkedin: '#',
    },
    {
        name: 'Emily Mwangi',
        position: 'PPC Manager',
        info: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
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
        info: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
        foto: images.team06,
        linkedin: '#',
    },

];

const Testimonials = [
    {
        name: 'John Oloo',
        position: 'Marketing Director at Digitech Corp',
        testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
        name: 'Stanley Mwenda',
        position: 'Founder of Qwetu Housing',
        testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
        name: 'Mrs.Margaret Muthoni',
        position: 'Marketing Director at Kenya Airways',
        testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
        name: 'Moses Keter',
        position: 'Marketing Director at Pendeza Org',
        testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
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