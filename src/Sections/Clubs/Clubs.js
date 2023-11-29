import "./Clubs.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

import { Container, Row, Col, Card } from "react-bootstrap";

import { Section } from "../../Components/index";

import { clubsData } from "../../Data/Clubs";

const Clubs = () => {
  
  return (
    <>
      <Section id="clubs" title="Clubs">
        <Container>
          <Row>
            {clubsData.map((club, index) => (
              <Col
                key={index}
                xs={12}
                md={6}
                lg={6}
                className="text-center mb-3"
              >
                <Card className="card">
                  <Card.Body>
                    <div className="club-icon">{club.icon}</div>
                    <Card.Title className="club-title">
                      <a
                        href={club.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h4>{club.title}</h4>
                      </a>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 year">
                      {club.year}
                    </Card.Subtitle>
                    <Card.Text>
                      <p>{club.description}</p>
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

export default Clubs;
