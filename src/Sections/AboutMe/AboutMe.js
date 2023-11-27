import "./AboutMe.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faChalkboardTeacher,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";

import { HandleProgressBar } from "../../Components/index";

const AboutMe = () => {
  // Soft Skills data
  const softSkills = [
    { skill: "Mentorship", percentage: 85 },
    { skill: "Self-Motivation", percentage: 90 },
    { skill: "Leadership", percentage: 70 },
  ];

  // Metrics data
  const metrics = [
    { label: "YouTube Views", value: "82k+", icon: faYoutube },
    { label: "Face-to-Face Lectures", value: "11+", icon: faChalkboardTeacher },
    { label: "Problem Solving", value: "224+", icon: faPuzzlePiece },
  ];

  return (
    <>
      <div className="aboutMe">
        <div className="container">
          <div className="row">
            {/* About Me Column */}
            <div className="content col-md-6">
              <h2>About Me</h2>
              <p className="about-me-paragraph">
                I am a dedicated computer engineering professional with a robust
                technical background and an insatiable passion for continuous
                learning. I excel in multitasking, prioritize effectively, and
                have experience in both individual and team environments. My
                expertise includes front-end and back-end development,
                containerization, hosting, and machine learning. I've initiated
                a successful full-stack boot camp to share my knowledge and
                skills, and I take pride in orchestrating various activities,
                such as trips and events, for large groups of individuals. On
                the side, I run a YouTube channel where I share lectures and
                tutorials on computer engineering topics, showcasing my
                communication and teaching skills. Proficient in various design
                and production applications, I create professional-quality
                visual content.
              </p>
            </div>

            {/* Soft Skills Column */}
            <div className="soft-skills col-md-6">
              <h2>Soft Skills</h2>
              {/* Map through soft skills and display progress bars */}
              {softSkills.map((skill, index) => (
                <div key={index} className="mb-3">
                  <span className="percentage">
                    {skill.skill} {skill.percentage}%
                  </span>
                  <HandleProgressBar value={skill.percentage} />
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="metrics">
            <div className="row">
              {/* Map through metrics and display in columns */}
              {metrics.map((metric, index) => (
                <div key={index} className="col-md-4 mb-3 text-center">
                  <div className="">
                    <FontAwesomeIcon
                      icon={metric.icon}
                      size="2x"
                      className="icon"
                    />
                  </div>
                  <h6 className="mt-1 label">{metric.label}</h6>
                  <p className="">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
