import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  accenture,
  du,
  igdtuw,
  youtube,
  foodie,
  netflix,
  threejs,
  filo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Experienced in React js ",
    icon: web,
  },
  {
    title: "Proficient in Modern JavaScript",
    icon: mobile,
  },
  {
    title: "Version Control with Git",
    icon: backend,
  },
  {
    title: "Responsive Web Design",
    icon: creator,
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
    title: " Bachelor’s in Mathematics and Computer Science",
    company_name: "Delhi University",
    icon: du,
    iconBg: "#383E56",
    date: "Mar 2017 - Jul 2020 , CGPA-8.2",
    points: [
      "Coursework : Advanced English, Computer Fundamentals, Calculus, Database Management Systems, Algebra, Computer Networks and Internet Technologies, Latex, Analytic Geometry and Applied Algebra, Multimedia Systems and Applications, Computer Algebra, Analysis, Programming with Python, Statistical Software: R, Differential Equations, Statistics, Software Engineering ",
    ],
  },
  {
    title: " Master of Computer Applications",
    company_name: "Indira Gandhi Delhi Technical University for Women",
    icon: igdtuw,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Jul 2022 , CGPA-8.52",
    points: [
      "Semester-1 : Programming with Python, DBMS, Discrete Mathematics, Operating Systems ",
      "Semester-2 : Data Structures, Machine Learning, Software Engineering, Computer Networks",
      "Semester-3 : Design and Analysis of Algorithms, Big Data and SQL, Software Testing and Quality Assurance, Frontend Design Techniques, Web Programming",
      "Semester 4: Major Project",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#383E56",
    date: "August 2022 - December 2023",
    points: [
      "Developed highly interactive, mobile-responsive UIs for multiple projects using React.js and Tailwind CSS, resulting in a 40% increase in user engagement and a seamless experience across devices.",
      "Created reusable components and integrated component libraries to ensure maintainability and consistency across multiple projects, reducing development time by 20%.",
      "Reduced page load time by 30% through the implementation of code splitting and lazy loading techniques, improving the site’s performance and SEO rankings.",
      "Collaborated with the backend team to integrate REST APIs, improving data synchronization by 20% and enhancing real-time data updates.",
      "Led the adoption of Tailwind CSS in a major project, significantly improving code readability, maintainability, and reducing the CSS file size by 50%."
    ],
  },
  {
    title: "Frontend Software Engineer",
    company_name: "Filo",
    icon: filo,
    iconBg: "#383E56",
    date: "December 2023 - November 2024",
    points: [
      "Real-Time Systems: Revamped a WhatsApp-style chat feature using React.js, improving user engagement and increasing NPS by 30%.",
      "Technical Ownership: Designed and developed the About Us page from scratch, resolved unnecessary re-renders across multiple pages.",
      "Process Automation: Built a dynamic, data-driven careers page using Google Sheets and Docs API, increasing user applications by 32%.",
      "Performance Optimization: Optimized the build to enhance web vital scores, and reduced load time by 13%.",
    ],
  },
];


const projects = [
  {
    name: "Netflix GPT",
    description:
      " Developed Netflix-GPT, a movie recommendation web app using React, TailwindCSS, Firebase, and Redux. Integrated TMDB and GeminiAI APIs for dynamic data and personalized suggestions, with YouTube trailers. Implemented authentication, profile management, multi-language support, and optimized UI using memoization and responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "JSX",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      
    ],
    image: netflix,
    source_code_link: "https://github.com/9gunjan/netflix-gpt",
  },
  {
    name: "Foodie Express ",
    description:
      " Developed Foodie Express, a food ordering web app using React, Redux Toolkit, and Parcel. Integrated Swiggy API for dynamic restaurant data, including images, ratings, and cuisines. Built features like a responsive header, search bar, and listings. Managed state with Redux and React Hooks, ensuring quality with Jest testing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Parcel",
        color: "green-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "live API",
        color: "blue-text-gradient",
      },
      {
        name: "jest",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: foodie,
    source_code_link: "https://github.com/9gunjan/Food-Ordering-App",
  },
  {
    name: "My Youtube",
    description:
      " Developed a YouTube app clone using React.js, implementing advanced features such as high-order components(HOC), debouncing, caching, nested comments, live chat, and a responsive sidebar. Integrated the YouTube API for real-time search suggestions and video embedding, enhancing functionality and user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "youtube API",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "blue-text-gradient",
      },
      {
        name: "live chat feature",
        color: "green-text-gradient",
      },
      
    ],
    image: youtube,
    source_code_link: "https://github.com/9gunjan/My-Youtube",
  },
];

export { services, technologies, experiences, projects };
