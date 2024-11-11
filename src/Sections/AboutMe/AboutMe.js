import "./AboutMe.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HandleProgressBar } from "../../Components/index";

import { AnimatedCounter } from "../../Components/index";

import { softSkills, metrics } from "../../Data/AboutMe";

const AboutMe = () => {
  return (
    <>
      <section id="aboutMe" className="aboutMe">
        <div className="container">
          <div className="row">
            {/* About Me Column */}
            <div className="content col-md-6">
              <h2>About Me</h2>
              <p className="about-me-paragraph">
                Software Engineer with 3 years of experience and a proven track
                record as a Project Planner and Team Lead for a team of 7.
                Specialized in artificial intelligence and Python, with over 5
                years of experience, and expert in LLM, RAG, DRF, Celery, and
                FastAPI. Proficient in containerizing services using Docker and
                Docker Compose, and familiar with AWS services including EC2,
                S3, SES, SM, and IAM. Knowledgeable in GitHub Actions for CI/CD
                and experienced in unit testing with the pytest tool.
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
                  <p className="">
                    <AnimatedCounter value={metric.value} />+
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
