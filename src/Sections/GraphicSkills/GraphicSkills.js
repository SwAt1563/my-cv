import "./GraphicSkills.css";
import { Card, Container, Row, Col } from "react-bootstrap";



import { Section } from "../../Components/index";
import { skills } from "../../Data/GraphicSkills";

const GraphicSkills = () => {
 
  return (
    <>
      <Section id="graphic-skills" title="Graphic Skills">
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
      </Section>
    </>
  );
};

export default GraphicSkills;
