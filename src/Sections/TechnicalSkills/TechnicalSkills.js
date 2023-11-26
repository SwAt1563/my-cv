import "./TechnicalSkills.css";
import { CustomBar } from "../../Components/index";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaAws, FaCloud } from "react-icons/fa";

import reactIcon from "../../Assets/TechnicalSkills/react.svg";
import pythonIcon from "../../Assets/TechnicalSkills/python.svg";
import djangoIcon from "../../Assets/TechnicalSkills/django.svg";
import bootstrapIcon from "../../Assets/TechnicalSkills/bootstrap.svg";
import dockerIcon from "../../Assets/TechnicalSkills/docker.svg";
import azureIcon from "../../Assets/TechnicalSkills/azure.svg";

// codes icons
// https://devicon.dev/

const TechnicalSkills = () => {
  const skills = [
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
  return (
    <>
      <div className="technical-skills pt-3 pb-5">
        <h1 className="text-center  mb-5">Technical Skills </h1>
        <Container>
          <Row>
            {skills.map((skill, index) => (
              <Col lg={3} md={4} sm={6} key={index}>
                <Card className="mt-2 ">
                  <Card.Body>
                    {skill.icon}
                    <Card.Title>
                      <h5>{skill.title}</h5>
                    </Card.Title>
                    <CustomBar value={skill.percent} />
                    <Card.Text className="content mt-2">
                      {skill.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TechnicalSkills;
