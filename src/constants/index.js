import project1 from "./project-1.jpg"; // Corrected path
import project2 from "./project-2.jpg"; // Corrected path
import project3 from "./project-3.jpg"; // Corrected path
import project4 from "./project-4.jpg"; // Corrected path

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile developer with a passion for creating efficient and user-friendly web applications. With professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Technology Information Help & Info Desk Staff",
    company: "Hennepin County Library",
    description: `Assisted library patrons with technology-related inquiries, provided general help at the information desk, and guided users on various technology resources.`,
    technologies: [], // No specific technologies to list here
  },
  {
    year: "Summer 2023",
    role: "Youth Program Facilitator and Programmer",
    company: "Hennepin County Library",
    description: `Facilitated a summer youth program teaching children coding concepts using block code to develop 2D games. Helped students understand programming fundamentals with Python and JavaScript.`,
    technologies: ["Block Code", "Python", "JavaScript"],
  },
  {
    year: "June 2023 - August 2024",
    role: "Full Stack Developer",
    company: "Resell Method",
    description: `Helped in the development of a Discord third-party marketplace as part of the programming team, working with others to build the web application. Used IDEs and logins to Visual Studio's development environments.`,
    technologies: [
      "Python",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "React.js",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  phoneNo: "+1 (952)-405-0179",
  email: "MustafaKarim.dev@Gmail.com",
};
