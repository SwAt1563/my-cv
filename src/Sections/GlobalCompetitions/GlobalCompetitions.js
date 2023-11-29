import "./GlobalCompetitions.css";

// https://www.npmjs.com/package/react-responsive-carousel?activeTab=readme
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";




import { Container } from "react-bootstrap";



import { Row, Col, Card, Button } from "react-bootstrap";

import { Section } from "../../Components/index";

import { competitions, profiles } from "../../Data/GlobalCompetitions";

const GlobalCompetitions = () => {


  const settings = {
    useKeyboardArrows: true,
    autoPlay: true,
    infiniteLoop: true,
    emulateTouch: true,
    stopOnHover: false,

    showThumbs: false,
    showStatus: false,
    showIndicators: false,
    interval: 3000,
  };

  

  const ProfileCard = ({ icon, title, link }) => (
    <Col xs={12} sm={12} md={6} lg={4} className=" text-center mb-4 ">
      <Card className="card pt-1 pb-1">
        <div className="">{icon}</div>
        <Card.Body>
          <Card.Title>
            <h3>{title}</h3>
          </Card.Title>
          <Button
            variant="primary"
            href={link}
            target="_blank"
            className="visit-btn"
          >
            <h5 className="m-0 p-1">Visit Profile</h5>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <>
      <Section id="global-competitions" title="Global Competitions">
        <Container className="box">
          <Carousel {...settings}>
            {competitions.map((competition, index) => (
              <div className="slide">
                <img
                  alt="sample_file"
                  src={competition.imgSrc}
                  key={index}
                  className="img-carousel"
                />
                <h1 className="custom-legend title w-25 font-weight-bold fs-6">
                  {competition.title}
                </h1>
              </div>
            ))}
          </Carousel>

          <Row className="mt-4">
            {profiles.map((profile, index) => (
              <ProfileCard key={index} {...profile} />
            ))}
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default GlobalCompetitions;
