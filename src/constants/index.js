import Tophik from "../assets/image/Tophic.jpg";
import Ibrahim from "../assets/image/Ibrahim.jpeg";
import Feven from "../assets/image/linkedin-image.png";
import Cpu from "../assets/image/CPU.png";
import Entoto from "../assets/image/Entoto.png";
import aau from "../assets/image/aau.png";
import alx from "../assets/image/alx.png";
import forum from "../assets/image/forum.png";
import Amazon from "../assets/image/Amazon-Clone.png";
import Apple from "../assets/image/Apple-Responsive-Replica.png";
import Netflix from "../assets/image/Netflix.png";
import Portfolio from "../assets/image/Feven-Portfolio.png";
import python from "../assets/tech/python.jpeg";
import Coc from "../assets/image/COC.png";
import AI from "../assets/image/python1.png";
import python1 from "../assets/image/AI.png";
import Dotnet from "../assets/image/Dotnet.png";
import DotnetC from "../assets/image/Certificate/Dotnet.png";
import CpuC from "../assets/image/Certificate/Cpu.png";
import EntotoC from "../assets/image/Certificate/Entoto.png";
import CocC from "../assets/image/Certificate/Coc.png";
import PythonC from "../assets/image/Certificate/Python.png";
import AIC from "../assets/image/Certificate/AI.png";
import YaredC from "../assets/image/Certificate/Yared.png";
import ALXC from "../assets/image/Certificate/ALX.png";
import ALXFC from "../assets/image/Certificate/ALXF.png";

import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About", type: "jsx" },
  { id: "work", title: "Projects", type: "jsx" },
  { id: "experience", title: "Education", type: "jsx" },
  {
    id: "cv",
    title: "C-Vitae",
    type: "link",
    link: "https://docs.google.com/document/d/1vwFAKrkveRAsiBEvAz0Z59_gK67hYP3-/edit?usp=sharing&ouid=112582762099483841377&rtpof=true&sd=true",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
    skill: "Web",
    text: "As a Full Stack Developer, I excel in creating both the client-side and server-side of web applications. My expertise spans across technologies such as JavaScript, React.js, Node.js, and MySQL, enabling me to build robust, scalable, and responsive applications from end to end.",
  },
  {
    title: "AI and Machine Learning Specialist",
    icon: python,
    skill: "AI",
    text: "In my role as an AI and Machine Learning Specialist, I focus on designing and implementing machine learning models and AI solutions. My experience includes working with Python and frameworks like TensorFlow and PyTorch, applying advanced techniques in reinforcement learning, natural language processing, and computer vision.",
  },
  {
    title: "Web and Multimedia Developer",
    icon: web,
    skill: "Web",
    text: "As a Web and Multimedia Developer, I create engaging and interactive web and multimedia content. My skills encompass web design, development, and the integration of multimedia elements to enhance user experience's and create visually compelling digital solutions.",
  },
  {
    title: "IT Administrator",
    icon: mobile,
    skill: "IT",
    text: "In my role as an IT Administrator, I manage and oversee IT infrastructure and systems. My responsibilities include network management, database administration, and ensuring the stability and security of IT operations to support organizational efficiency and productivity.",
  },

  {
    title: "Web Developer",
    icon: web,
    skill: "Frontend",
    text: "As a Web Developer, I specialize in crafting visually appealing and functional websites. My expertise lies in designing user interfaces and ensuring a seamless user experience across diverse devices and browsers.",
  },
  {
    title: "React Native Developer",
    icon: mobile,
    skill: "Mobile",
    text: "In my role as a React Native Developer, I build cross-platform mobile applications. My focus is on creating efficient, smooth, and responsive apps for both iOS and Android platforms.",
  },
  {
    title: "Backend Developer",
    icon: backend,
    skill: "Backend",
    text: "As a Backend Developer, I handle server-side logic and database management, ensuring that the backend infrastructure supports front-end applications efficiently, with a strong emphasis on performance, security, and scalability.",
  },
  {
    title: "Python and AI Specialist",
    icon: python,
    skill: "AI",
    text: "As a Python and AI Specialist, I develop intelligent systems and machine learning models using Python. My expertise includes AI solutions, data analysis, and leveraging frameworks like TensorFlow and PyTorch to create innovative applications.",
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git", icon: git },
  { name: "python1", icon: python1 },
  { name: "AI", icon: AI },
];

const experiences = [
  {
    title: "Specialized Information Technology Technician",
    company_name: "CPU Business and Information Technology College",
    icon: Cpu,
    iconBg: "#E6DEDD",
    date: "September 05, 2017",
    points: [
      "Intermediate Computer Programming: Gained foundational and advanced knowledge in computer programming, including various programming languages and development practices.",
      "Intermediate Database Management: Developed skills in database design, management, and querying, focusing on relational databases and data handling.",
      "Intermediate Computer Networking: Acquired expertise in networking principles, configurations, and troubleshooting for various network infrastructures.",
      "Basics of Telecommunications: Learned the fundamentals of telecommunications systems, including signal transmission, communication protocols, and network components.",
      "Data Structures and Algorithms: Studied essential data structures (e.g., arrays, linked lists, trees) and algorithms, emphasizing their application in solving computational problems.",
    ],
    additionalImage: CpuC,
  },
  {
    title: "Web and Multimedia Technology",
    company_name: "Entoto TVET College",
    icon: Entoto,
    iconBg: "#E6DEDD",
    date: "August 10, 2015",
    points: [
      "Intermediate Computer Programming: Developed programming skills relevant to web and multimedia applications.",
      "Intermediate Database Management: Practical experience in managing and querying databases.",
      "Intermediate Computer Networking: Skills in network management and troubleshooting.",
      "Basics of Telecommunications: Fundamentals of telecommunications technology.",
      "Data Structures and Algorithms: Basic understanding of data structures and algorithmic solutions.",
    ],
    additionalImage: EntotoC,
  },
  {
    title: "Diploma in Application Software",
    company_name: "Dotnet Computer Technology",
    icon: Dotnet,
    iconBg: "#E6DEDD",
    date: "November 5, 2004",
    points: [
      "Computer Maintenance: Knowledge in maintaining and repairing computer hardware.",
      "Microsoft Application Software: Proficiency in Microsoft Office Suite applications.",
      "Visual Basic Programming: Skills in Visual Basic for application development.",
      "C++ Programming: Competence in C++ programming for software development.",
      "Peachtree Accounting: Experience with Peachtree accounting software.",
      "AutoCAD: Skills in AutoCAD for drafting and design.",
    ],
    additionalImage: DotnetC,
  },
  {
    title: "Certificate of Competency in Web and Multimedia",
    company_name: "TVET Agency of Occupational Competency Assessment (OCACC)",
    icon: Coc,
    iconBg: "#E6DEDD",
    date: "C- O- C",
    points: [
      "Web and Multimedia: Recognized competency in web development and multimedia technologies.",
    ],
    additionalImage: CocC,
  },
  // {
  //   title: "Fullstack Application Development Program",
  //   company_name: "Evangadi Networks",
  //   icon: aau,
  //   iconBg: "#383E56",
  //   date: "2024",
  //   points: [
  //     "Mastered HTML, CSS, and Bootstrap for designing responsive and engaging web interfaces.",
  //     "Developed interactive applications using JavaScript and React.js.",
  //     "Acquired expertise in server-side programming with Node.js and Express.js.",
  //     "Implemented responsive layouts and ensured cross-browser compatibility.",
  //   ],
  // },
  {
    title: "Advanced Python Programming",
    company_name: "Addis Ababa University",
    icon: aau,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Studied machine learning concepts, including supervised and unsupervised learning.",
      "Utilized MySQL for robust data management and preprocessing techniques.",
      "Developed deep learning models using TensorFlow and PyTorch.",
      "Applied computer vision techniques and reinforcement learning strategies.",
    ],
    additionalImage: PythonC,
  },
  {
    title: "Advanced Artificial Intelligence",
    company_name: "Addis Ababa University",
    icon: aau,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Developed AI models for applications like image classification and text analysis.",
      "Executed data science projects focusing on exploratory data analysis and predictive modeling.",
      "Created and optimized AI solutions with deep learning frameworks.",
      "Mastered NLP techniques for text analysis and sentiment classification.",
    ],
    additionalImage: AIC,
  },
  // {
  //   title: "Certificate in Python and AI",
  //   company_name: "Addis Ababa University Institute of Technology",
  //   icon: aau,
  //   iconBg: "#E6DEDD",
  //   date: "March 22, 2024",
  //   points: [
  //     "Python Programming: Acquired advanced skills in Python, focusing on development, scripting, and data manipulation.",
  //     "Artificial Intelligence: Gained knowledge in AI principles, machine learning algorithms, and their applications.",
  //   ],
  // },

  {
    title: "Certificate of English Language",
    company_name: "Info Hi-Tech and Languages | YARAD School",
    icon: aau,
    iconBg: "#E6DEDD",
    date: "Yared",
    points: [
      "English Language: Certification in English language proficiency.",
    ],
    additionalImage: YaredC,
  },
  {
    title: "AI Career Essentials",
    company_name: "ALX",
    icon: alx,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Acquired foundational knowledge in artificial intelligence and career essentials in the field.",
    ],
    additionalImage: ALXC,
  },
  {
    title: "Founders Academy",
    company_name: "ALX",
    icon: alx,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Recognition for participating in the Founders Academy, emphasizing entrepreneurial skills and innovation.",
    ],
    additionalImage: ALXFC,
  },
];

const testimonials = [
  {
    testimonial:
      "Elias excelled in both front-end and back-end technologies during His time as a student. His problem-solving skills and attention to detail were evident in every project he undertook.",
    name: "Ibrahim Wondimu",
    designation: "Experienced MERN Stack Developer",
    company: "Evangadi Tech",
    image: Ibrahim,
    source_code_link: "https://www.linkedin.com/in/ibrahim-wondimu/",
  },
  {
    testimonial:
      "Elias played a key role in the Evangadi Forum project, demonstrating His exceptional skills in full-stack development. His contributions were crucial to the project's success.",
    name: "Tophik Mohammed",
    designation: "Software Engineer",
    company: "Evangadi Network",
    image: Tophik,
    source_code_link: "https://www.linkedin.com/in/tophik-mohammed280468/",
  },
  {
    testimonial:
      "Working alongside Elias in Python and AI courses was a privilege. he consistently showed a strong grasp of both front-end and back-end technologies, as well as a deep understanding of AI and Python programming.",
    name: "Feven Girma",
    designation: "Full Stack Developer",
    company: "Freelancer",
    image: Feven,
    source_code_link: "https://www.linkedin.com/in/fevdeveloper/",
  },
];

const projects = [
  {
    name: "Amazon-Clone",
    description:
      "A meticulously crafted replica of the Amazon website, featuring a complete shopping interface including product search, detailed listings, a shopping cart, and a streamlined checkout process. Built with React, MongoDB, and Tailwind CSS for a responsive and dynamic experience.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
    ],
    image: Amazon,
    source_code_link: "https://amazon-clone-by-feven.netlify.app/",
  },
  {
    name: "Evangadi-Forum",
    description:
      "A detailed clone of the Evangadi Academy of Coders platform, designed for job searching and career advancement. Features include job search, salary estimates, and location-based opportunities. Built with React, REST API, and SCSS for a modern and responsive design.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "REST API", color: "green-text-gradient" },
      { name: "SCSS", color: "pink-text-gradient" },
    ],
    image: forum,
    source_code_link: "https://forum.journeywithfeven.com/",
  },
  {
    name: "Netflix-Clone",
    description:
      "A comprehensive clone of the Netflix platform featuring dynamic content browsing, user authentication, personalized recommendations, and streaming capabilities. Built with Next.js, Supabase, and CSS for a fast and immersive streaming experience.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Supabase", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: Netflix,
    source_code_link: "https://elias-sara.github.io/Netflix-Clone-2024/",
  },
  {
    name: "Crypto-Currency Price Prediction",
    description:
      "An AI-driven project focusing on predicting cryptocurrency prices using machine learning techniques. Implemented both LSTM and GRU models, experimented with various configurations, and evaluated performance with RMSE and prediction plots. The project includes data preprocessing, model training, and evaluation on cryptocurrencies like ETH, BNB, and SOL.",
    tags: [
      { name: "LSTM", color: "blue-text-gradient" },
      { name: "GRU", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: Apple, // Replace with a relevant image if available
    source_code_link:
      "https://github.com/your-github-repo/crypto-price-prediction", // Replace with the actual GitHub repo link
    additional_link:
      "https://docs.google.com/document/d/1rxDTh26rlkSDuxoNoznK-BgLiddfWE-t/edit?usp=sharing&ouid=110846494501650482779&rtpof=true&sd=true", // Link to the report or additional documentation
  },

  {
    name: "Feven-Portfolio",
    description:
      "A personal portfolio showcasing my work, skills, and achievements. Features a responsive design with interactive elements and high-quality media displays. Built with Next.js, Supabase, and CSS to reflect my professional growth and capabilities.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Supabase", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/journyWithFeven",
  },
  {
    name: "Artificial Intelligence Project",
    description:
      "A project focusing on AI applications, including image classification, text analysis, and predictive modeling. Utilizes deep learning techniques and frameworks like TensorFlow and PyTorch for innovative solutions.",
    tags: [
      { name: "TensorFlow", color: "blue-text-gradient" },
      { name: "PyTorch", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: python,
    source_code_link: "https://github.com/journyWithFeven",
  },
];

export { services, technologies, experiences, testimonials, projects };
