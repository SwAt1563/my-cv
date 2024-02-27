// codes icons
// https://devicon.dev/

import dockerIcon from "../Assets/TechnicalSkills/docker.svg";
import { FaCloud, FaAws } from "react-icons/fa";
import azureIcon from "../Assets/TechnicalSkills/azure.svg";

import pythonIcon from "../Assets/TechnicalSkills/python.svg";
import djangoIcon from "../Assets/TechnicalSkills/django.svg";
import pytestIcon from "../Assets/TechnicalSkills/pytest.svg";
import bootstrapIcon from "../Assets/TechnicalSkills/bootstrap.svg";
import reactIcon from "../Assets/TechnicalSkills/react.svg";
import nextjsIcon from "../Assets/TechnicalSkills/nextjs.svg";
import apolloIcon from "../Assets/TechnicalSkills/apollo.svg";
import prismaIcon from "../Assets/TechnicalSkills/prisma.svg";

export const skills = [
  {
    title: "Python",
    icon: <img src={pythonIcon} alt="Python" className="icon" />,
    percent: 85,
    description:
      "Proficient in Python programming, enabling versatile and efficient application development.",
  },
  {
    title: "Django",
    icon: <img src={djangoIcon} alt="Django" className="icon" />,
    percent: 65,
    description:
      "Expertise in Django framework for building robust and scalable web applications.",
  },
  {
    title: "Pytest",
    icon: <img src={pytestIcon} alt="Pytest" className="icon" />,
    percent: 60,
    description:
      "Proficiency in Pytest for unit testing includes crafting tests, using fixtures and markers, understanding assertion rewriting for clarity.",
  },
  {
    title: "Bootstrap",
    icon: <img src={bootstrapIcon} alt="Bootstrap" className="icon" />,
    percent: 80,
    description:
      "Utilize Bootstrap for responsive and visually appealing design, ensuring a seamless user experience.",
  },
  {
    title: "ReactJS",
    icon: <img src={reactIcon} alt="ReactJS" className="icon" />,
    percent: 80,
    description:
      "Skilled in ReactJS to develop interactive and dynamic user interfaces for modern web applications.",
  },
  {
    title: "Nextjs",
    icon: <img src={nextjsIcon} alt="Nextjs" className="icon" />,
    percent: 65,
    description:
      "Expertise in Next.js covers static site generation, server-side rendering, and performance optimization through efficient data fetching and asset management.",
  },
  {
    title: "Apollo GraphQL",
    icon: <img src={apolloIcon} alt="Apollo GraphQL" className="icon" />,
    percent: 60,
    description:
      "Experience includes using Apollo GraphQL for GraphQL API implementation, state management in React, and optimized data flow for web app efficiency.",
  },
  {
    title: "Prisma",
    icon: <img src={prismaIcon} alt="Prisma" className="icon" />,
    percent: 50,
    description:
      "Experience with Prisma includes ORM use for database management, data modeling, migrations, and streamlining backend development for performance enhancement.",
  },

  {
    title: "Docker",
    icon: <img src={dockerIcon} alt="Docker" className="icon" />,
    percent: 30,
    description:
      "Implement containerization with Docker for streamlined deployment and scalable application management.",
  },
  {
    title: "Rest API",
    icon: <FaCloud className="icon" />,
    percent: 70,
    description:
      "Develop and integrate RESTful APIs for efficient communication between web applications and services.",
  },
  {
    title: "AWS",
    icon: <FaAws className="icon" />,
    percent: 30,
    description:
      "Proficient in Amazon Web Services, leveraging cloud solutions for scalable and secure application architecture.",
  },
  {
    title: "Azure AI",
    icon: <img src={azureIcon} alt="Azure" className="icon" />,
    percent: 25,
    description:
      "Implement AI solutions on Microsoft Azure for intelligent data analysis and automation.",
  },
];
