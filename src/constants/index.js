import {
  AdminPanel,
  backend,
  Bookworm,
  Codesis,
  css,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  web,
  certificate,
  github,
  instituteLogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "Frontend SDE II",
    company_name: "Codesis Technologies Pvt. Ltd.",
    icon: Codesis,
    iconBg: "#383E56",
    date: "Oct 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

];

const certificates = [
  {
    name: "FullStack Web Developer",
    institute: "TryCatch Classes",
    image: certificate,
    github: github,
    link: "https://drive.google.com/file/d/19-3OMwGClQy_DG_LxYXqSiZ3Bg8eVZIn/view",
    logo:instituteLogo
  },
  // {
  //   description:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   institute: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },

];

const projects = [
  {
    name: "Bookworm (E-commerce Website)",
    description:
      "An online bookstore developed with React.js, enhanced with Material UI, and powered by Redux Toolkit for state management. Users can browse, select, and purchase books effortlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux/redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Bookworm,
    source_code_link: "https://github.com/",
  },
  {
    name: "AdminPanel (Bookworm Backend Management)",
    description:
      "A backend management system built using Node.js, Express.js, and MongoDB. It simplifies operations like managing book listings, categories, and orders for seamless e-commerce functionality",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: AdminPanel,
    source_code_link: "https://github.com/",
  },
  {
    name: "FormCreator (Custom Form Generator)",
    description:
      " web application created with JavaScript that allows users to design and export customizable forms, demonstrating flexibility and user-focused development.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },

    ],
    image: AdminPanel,
    source_code_link: "https://github.com/",
  },
];

export { experiences, projects, services, technologies, certificates };

