import "./TechnicalSkills.css";
import { CustomBar } from "../../Components/index";
import { Card, Container, Row, Col } from "react-bootstrap";




import { Section } from "../../Components/index";
import { skills } from "../../Data/TechnicalSkills";

const TechnicalSkills = () => {
  
  return (
    <>
      <Section id="technical-skills" title="Technical Skills">
        <Container>
          <Row>
            {skills.map((skill, index) => (
              <Col lg={3} md={4} sm={6} key={index}>
                <Card className="mt-2 mb-3">
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
      </Section>
    </>
  );
};

export default TechnicalSkills;
