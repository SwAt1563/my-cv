import IeeeImgSrc from "../Assets/GlobalCompetitions/IEEE.jpg";
import HashCodeImgSrc from "../Assets/GlobalCompetitions/HashCode.png";

import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

export const competitions = [
  { title: "IEEE 2021", imgSrc: IeeeImgSrc },
  { title: "HashCode 2021", imgSrc: HashCodeImgSrc },
];

export const profiles = [
  {
    icon: <SiCodeforces className="card-icon" size={100} />,
    title: "Codeforces",
    link: "https://codeforces.com/profile/SwAt1563",
  },
  {
    icon: <FaHackerrank className="card-icon" size={100} />,
    title: "HackerRank",
    link: "https://www.hackerrank.com/profile/SwAt1563",
  },
  {
    icon: <SiLeetcode className="card-icon" size={100} />,
    title: "LeetCode",
    link: "https://leetcode.com/user6154XF/",
  },
];
