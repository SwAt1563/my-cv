import "./GraphicSkills.css";
import { Card, Container, Row, Col } from "react-bootstrap";

import photoshopIcon from "../../Assets/GraphicSkills/photoshop.svg";
import illustratorIcon from "../../Assets/GraphicSkills/illustrator.svg";
import premiereproIcon from "../../Assets/GraphicSkills/premierepro.svg";

const GraphicSkills = () => {
  const skills = [
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
  return (
    <>
      <div className="graphic-skills pt-5 pb-5">
        <h1 className=" text-center">Graphic Skills</h1>
        <Container>
          <Row>
            {skills.map((skill, index) => (
              <Col
                sm={6}
                md={4}
                key={index}
                className="d-flex align-items-center justify-content-center"
              >
                <Card className="mt-2 card text-center w-75">
                  <Card.Body>
                    {skill.icon}
                    <Card.Title className="mt-2">
                      <h5>{skill.title}</h5>
                    </Card.Title>

                    <Card.Text className="percent mt-2">
                      <h4>{skill.percent}%</h4>
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

export default GraphicSkills;
