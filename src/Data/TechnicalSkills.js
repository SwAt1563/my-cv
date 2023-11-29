// codes icons
// https://devicon.dev/

import { FaAws, FaCloud } from "react-icons/fa";

import reactIcon from "../Assets/TechnicalSkills/react.svg";
import pythonIcon from "../Assets/TechnicalSkills/python.svg";
import djangoIcon from "../Assets/TechnicalSkills/django.svg";
import bootstrapIcon from "../Assets/TechnicalSkills/bootstrap.svg";
import dockerIcon from "../Assets/TechnicalSkills/docker.svg";
import azureIcon from "../Assets/TechnicalSkills/azure.svg";

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
      title: "ReactJS",
      icon: <img src={reactIcon} alt="ReactJS" className="icon" />,
      percent: 70,
      description:
        "Skilled in ReactJS to develop interactive and dynamic user interfaces for modern web applications.",
    },
    {
      title: "Bootstrap",
      icon: <img src={bootstrapIcon} alt="Bootstrap" className="icon" />,
      percent: 80,
      description:
        "Utilize Bootstrap for responsive and visually appealing design, ensuring a seamless user experience.",
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