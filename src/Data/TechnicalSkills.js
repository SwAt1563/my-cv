// codes icons
// https://devicon.dev/

import dockerIcon from "../Assets/TechnicalSkills/docker.svg";
import { SiFastapi } from "react-icons/si";


import pythonIcon from "../Assets/TechnicalSkills/python.svg";
import { GiHeavyLightning } from "react-icons/gi";



export const skills = [
  {
    title: "Artificial Intelligence",
    icon: <GiHeavyLightning  className="icon" />,
    percent: 85,
    description:
      "Includes GenAI, ML, CV and NLP.",
  },
  {
    title: "Python",
    icon: <img src={pythonIcon} alt="Python" className="icon" />,
    percent: 90,
    description:
      "I speak fluently.",
  },
  {
    title: "FastAPI",
    icon: <SiFastapi className="icon" />,
    percent: 85,
    description:
      "My toy framework.",
  },
  {
    title: "Docker",
    icon: <img src={dockerIcon} alt="Docker" className="icon" />,
    percent: 80,
    description:
      "Makes my life easier.",
  },
];
