import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/comfysloth.png';
import Work2 from './assets/cars.png';
import Work3 from './assets/gitinspector.png';
import Work4 from './assets/architectweb.png';
import Work5 from './assets/hulu.png';
import Work6 from './assets/teastation.png';
import Work7 from './assets/worldwise.png';
import Work8 from './assets/wine.png';
import Work9 from './assets/mapty.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Rafi',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Zaman',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '27 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Bangladeshi',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'No',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Dhaka',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: 'secret',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'rafiirfan211@gmail.com',
  },

  {
    id: 9,
    title: 'github : ',
    description: 'rafi983',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Bangla, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '4+',
    title: 'Years of <br /> coding experience',
  },

  {
    id: 2,
    no: '100+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '80+',
    title: 'Github <br /> Commits',
  },

  {
    id: 4,
    no: '2',
    title: ' coding certificates <br /> got',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - PRESENT',
    title: 'Web Developer',
    desc: 'Been developing websites for 3+ years as a web dev.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2016 - 2018',
    title: 'Web Designer',
    desc: 'Previously used to design websites with HTML, CSS.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2015 - 2016',
    title: 'UI / UX Design',
    desc: 'Designed many applications by using figma, adobe.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2014',
    title: 'Secondary School Certificate <span> Mukul Niketan School </span>',
    desc: 'Passed SSC exam from my school with a result of Golden GPA-5.00',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2016',
    title: 'Higher Secondary Certificate <span> Ananda Mohan College </span>',
    desc: 'Took part in HSC ended up having a brilliant result',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: 'Bachelor of Science<span> RUET </span>',
    desc: 'Admitted in one of the most prestigious uni in bangladesh'
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '99',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '85',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '90',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '60',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '80',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '60',
  },

  {
    id: 8,
    title: 'React',
    percentage: '97',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Project 1',
    details: [
      {
        icon: <FiFileText />,
        title: 'ComfySloth',
      },

    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Project 2',
    details: [
      {
        icon: <FiFileText />,
        title: 'Classic Cars',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Project 3',
    details: [
      {
        icon: <FiFileText />,
        title: 'Git Inspector',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Project 4',
    details: [
      {
        icon: <FiFileText />,
        title: 'Architect Website',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Project 5',
    details: [
      {
        title: 'Hulu',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Project 6',
    details: [
      {
        icon: <FiFileText />,
        title: 'Tea Station',
      },
    ],
  },

  {
    id: 7,
    img: Work7,
    title: 'Project 7',
    details: [
      {
        icon: <FiFileText />,
        title: 'Worldwise',
      },
    ],
  },

  {
    id: 8,
    img: Work8,
    title: 'Project 8',
    details: [
      {
        icon: <FiFileText />,
        title: 'Wine House',
      },
    ],
  },

  {
    id: 9,
    img: Work9,
    title: 'Project 9',
    details: [
      {
        icon: <FiFileText />,
        title: 'Mapty',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
