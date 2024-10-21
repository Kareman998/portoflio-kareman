import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
import JumiaImage from "./images/Ecommerce jumia.png";
import Linkedin from "./images/linkedin.png";
import Shopping from "./images/shopping.png";
import Casivu from "./images/chart3.png";
import jumiaDashboard from "./images/jumiadashboard.png";
import Movieapp from "./images/movie.png";

const Info = {
  name: "Kareman Ahmed",
  stack: ["Software Engineer", "Full Stack MEARN Developer", "Freelancer"],
  bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!",
};

const ProjectInfo = [
  {
    title: "Dashboard E-comm App",
    desc: "Led the creation of an ecommerce platform from scratch, using React, Vite, and Firebase.Introduced TypeScript into the project and assisted colleagues in adopting it, enhancing code reliabilityand developer productivity.Worked closely with teammates to design and build smooth, fast features for users.",
    image: Casivu,
    live: false,
    technologies: [
      "Vite",
      "Firebase",
      "Tailwindcss",
      "CloudFunction",
      "ShadCN",

      "SendGrid",
    ],
    // link: "https://github.com/Code-Mars/Travel-Tracker",
    // github: "https://github.com/Code-Mars/Travel-Tracker",
  },
  {
    title: "Jumia E-comm App",
    desc: "Jumia is a modern, fully responsive e-commerce platform built using Angular, CSS,  and Bootstrap,NodeJS,MongoDB offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Ekart combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
    image: JumiaImage,
    live: true,
    technologies: ["Angular", "CSS", "Redux", "NodeJs", "MongoDB"],
    link: "https://jumia-clint.netlify.app/Home",
    github: "https://github.com/Kareman998/jumiaclone",
  },

  {
    title: "Shopping E-comm App",
    desc: "Shopping is a modern, fully responsive e-commerce platform built using ReactJs, CSS, NodeJs, React-Bootstrap,Sokit Oi  and Bootstrap,NodeJS,MongoDB offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Ekart combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
    image: Shopping,
    live: false,
    technologies: ["React", "React-Bootstrap", "MongoDB", "NodeJs,Sokit Oi"],
    link: "https://github.com/Kareman998/Shopping-Client-Side",
    github: "https://github.com/Kareman998/Shopping-Client-Side",
  },
  {
    title: "Jumia Dashboard",
    desc: "The Jumia Dashboard app is a comprehensive web application designed to provide an intuitive and user-friendly interface for managing and analyzing e-commerce data. Built using React for the frontend, this app offers a responsive and dynamic user experience enhanced by Bootstrap for seamless styling.On the backend, Node.js and Express work together to create a robust server environment, ensuring efficient data handling and API management. The application utilizes MongoDB as its database,",
    image: jumiaDashboard,

    live: false,
    technologies: ["React", "NodeJs", "Bootstrap", "Express", "MongoDB"],
    link: "https://github.com/JECDB-PROJECT/jumia-dashboard",
    github: "https://github.com/JECDB-PROJECT/jumia-dashboard",
  },
  {
    title: "Movie App",
    desc: "MovieApp is a dynamic web application designed to provide movie enthusiasts with an engaging platform to discover, explore, and manage their favorite films. Developed using React, this app delivers a seamless user experience, enhanced by the responsive design capabilities of Bootstrap and custom styling with CSS.Utilizing Redux for state management, MovieApp ensures efficient handling of application data, allowing users to easily navigate through various movie categories, view detailed information, and maintain a personalized watchlist. The app interacts with a fake API to simulate real-world data retrieval, offering a realistic browsing experience without the need for a backend server.",
    image: Movieapp,
    live: false,
    technologies: ["React", "Bootstap", "Redux"],
    link: "https://github.com/Kareman998/Movieapp?tab=readme-ov-file",
    github: "https://github.com/Kareman998/Movieapp?tab=readme-ov-file",
  },
  {
    title: "LinkedIn Clone",
    desc: "LinkedIn, including user profiles, job postings, and networking functionalities. Built using HTML5, CSS3, and JavaScript, this clone allows users to create accounts, update profiles, and connect with others. The site is optimized for various devices, ensuring a seamless user experience on both desktop and mobile platforms. It provides an intuitive interface for managing job postings, I created two pages, the first is the home page and the second is the profile page.",
    image: Linkedin,
    live: true,
    technologies: ["JavaScript", "HTML5", "CSS3"],
    link: "https://kareman998.github.io/Linkedindesign/",
    github: "https://github.com/Kareman998/Linkedindesign",
  },
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React JS",
      "Angular",
      "Redux",
      "Bootstrap",
      "Redux Toolkit",
      "Tailwind CSS",
      "ShadCN",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Nest JS",
      "Node JS",
      "Express JS",
      "MySQL",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    title: "Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"],
  },
];
const socialLinks = [
  { link: "https://github.com/Kareman998", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/kareman-ahmed-a5b782221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: IconBrandLinkedin,
  },
  {
    link: "https://www.instagram.com/kareman.fadel?igsh=YTEwZ3VjajJjdDQz&utm_source=qr",
    icon: IconBrandInstagram,
  },
  {
    link: "https://youtube.com/@kareman998?si=cAkJxswiToYnlsV6",
    icon: IconBrandYoutube,
  },
  { link: "https://leetcode.com/profile/", icon: IconBrandLeetcode },
];

const ExperienceInfo = [
  {
    role: "Front End Developer",
    // image: "Movieapp",
    company: "Casivu",
    date: "Oct 2023 - Present",
    desc: "Led the creation of an ecommerce platform from scratch, using React, Vite, and Firebase. Introduced TypeScript into the project and assisted colleagues in adopting it, enhancing code reliabilityand developer productivity. Worked closely with teammates to design and build smooth, fast features for users",
    skills: [
      "React JS",
      "Firebase",
      "Tailwindcss",
      "Matrial Ui",
      "Vite",
      "SendGrid",
      "ShadCN",
      "jest",
      "testing library",
    ],
  },
  {
    role: "Instructor",
    company: "Information Technology Institute (ITI) ",
    date: "March 2024 - Present",
    desc: " Responsible for teaching and mentoring students in web development and software engineering using technologies like WordPress, MySQL, Angular, JavaScript, ReactJS, NodeJS, and MongoDB, with a focus on hands-on experience and industry-relevant skills.",
    skills: [
      "Wordpress",
      "MySQL",
      "Angular",
      "Javascript",
      "ReactJs",
      "NodeJs",
      "Testing",
      "MongoDB",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
];
const Slugs = [
  "typescript",
  "spring",
  "javascript",
  "react",
  "angular",
  "nodejs",
  "html5",
  "css3",
  "sass",
  "mongodb",
  "selenium",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mysql",
  "firebase",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };