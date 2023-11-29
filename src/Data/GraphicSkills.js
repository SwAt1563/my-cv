import photoshopIcon from "../Assets/GraphicSkills/photoshop.svg";
import illustratorIcon from "../Assets/GraphicSkills/illustrator.svg";
import premiereproIcon from "../Assets/GraphicSkills/premierepro.svg";

export const skills = [
  {
    title: "Adobe Photoshop",
    icon: <img src={photoshopIcon} alt="Photoshop" className="icon" />,
    percent: 40,
  },
  {
    title: "Adobe Illustrator",
    icon: <img src={illustratorIcon} alt="Illustrator" className="icon" />,
    percent: 70,
  },
  {
    title: "Adobe Premiere Pro",
    icon: <img src={premiereproIcon} alt="Premiere Pro" className="icon" />,
    percent: 25,
  },
];
