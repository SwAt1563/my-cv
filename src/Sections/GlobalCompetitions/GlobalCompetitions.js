import "./GlobalCompetitions.css";

// https://cloudinary.com/blog/add-a-responsive-image-carousel-to-your-react-app
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import IeeeImgSrc from "../../Assets/GlobalCompetitions/IEEE.jpg";
import HashCodeImgSrc from "../../Assets/GlobalCompetitions/HashCode.png";
import { Container } from "react-bootstrap";

import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

import { Row, Col, Card, Button } from "react-bootstrap";

const GlobalCompetitions = () => {
  const competitions = [
    { title: "IEEE 2021", imgSrc: IeeeImgSrc },
    { title: "HashCode 2021", imgSrc: HashCodeImgSrc },
  ];

  const settings = {
    useKeyboardArrows: true,
    autoPlay: true,
    infiniteLoop: true,
    emulateTouch: true,

    showThumbs: false,
    showStatus: false,
    showIndicators: false,
    interval: 3000,
  };

  const profiles = [
    {
      icon: <SiCodeforces className="card-icon" size={100} />,
      title: "Codeforces",
      link: "https://codeforces.com/profile/SwAt1563",
    },
    {
      icon: <FaHackerrank className="card-icon" size={100} />,
      title: "HackerRank",
      link: "https://www.hackerrank.com/profile/SwAt1563",
    },
    {
      icon: <SiLeetcode className="card-icon" size={100} />,
      title: "LeetCode",
      link: "https://leetcode.com/user6154XF/",
    },
  ];

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
      <div className="global-competitions pt-5 pb-5">
        <h1 className="text-center mb-5">Global Competitions</h1>

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
      </div>
    </>
  );
};

export default GlobalCompetitions;
