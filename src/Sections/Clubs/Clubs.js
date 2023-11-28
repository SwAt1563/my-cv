import "./Clubs.css";
import { IoTelescope } from "react-icons/io5";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBIcon } from "mdb-react-ui-kit";
import { Container, Row, Col, Card } from "react-bootstrap";

const Clubs = () => {
  const clubsData = [
    {
      icon: <IoTelescope size={40} />,
      title: "Astronomy Club",
      link: "https://www.facebook.com/AmateurAstronomyClub.BZU",
      year: "2020",
      description:
        "With boundless enthusiasm, our Astronomy Club transforms stargazing into a shared, enjoyable adventure for all.",
    },
    {
      icon: <MDBIcon fas icon="award" style={{ fontSize: "40px" }} />,
      title: "Hult Prize Club",
      link: "https://www.facebook.com/Hultprizeinpalestine",
      year: "2021",
      description:
        "As a Hult Prize Club designer, I blend creativity and visual expertise for impactful projects, enhancing my skills.",
    },
  ];
  return (
    <>
      <div className="clubs pt-5">
        <h1 className="text-center mb-5">Clubs</h1>
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
                    <Card.Subtitle className="mb-2 year">{club.year}</Card.Subtitle>
                    <Card.Text>
                      <p>{club.description}</p>
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

export default Clubs;
