import "./Activities.css";

import { Container, Row, Col, Card, Button } from "react-bootstrap";



import { Section } from "../../Components/index";

import { activitiesData } from "../../Data/Activities";

const Activities = () => {
  
  return (
    <>
      <Section id="activities" title="Activities">
        <Container className="my-5">
          <Row>
            {activitiesData.map((activity, index) => (
              <Col key={index} lg={4} md={6} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={activity.image}
                    alt={activity.title}
                    className="img-fluid card-img"
                  />

                  <Card.Body>
                    <Card.Title>
                      <h4>{activity.title}</h4>
                    </Card.Title>
                    <Card.Text>
                      <p>{activity.description}</p>
                    </Card.Text>
                    <Button
                      variant="success"
                      href={activity.link}
                      target="_blank"
                      className="w-100 more-button"
                    >
                      <h6 className="p-0 m-0 pt-1 pb-1">More</h6>
                    </Button>
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

export default Activities;
