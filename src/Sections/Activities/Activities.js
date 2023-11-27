import "./Activities.css";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import BootcampImgSrc from "../../Assets/Activities/Bootcamp.jpg";
import FutureEngineersImgSrc from "../../Assets/Activities/FutureEngineers.jpg";
import RamdanEventImgSrc from "../../Assets/Activities/RamdanEvent.jpg";
import TripImgSrc from "../../Assets/Activities/Trip.JPG";


const Activities = () => {
  const activitiesData = [
    {
      title: "Ain Farah and the Dead Sea Hills Trip",
      description:
        "Successfully organized a trip for 108 individuals to Ain Farah and Dead Sea Hills, showcasing event management prowess and creativity in delivering memorable group experiences with a scenic water route and meat Sajiya preparation.",
      image: TripImgSrc,
      link: "https://www.instagram.com/stories/highlights/18023411638678642/",
    },
    {
      title: "Ramadan Supper Event",
      description:
        "Organized a Ramadan Iftar Event for 100+ students, partnering with a restaurant for food, Ana Jawwal for activities, and Easy Life for laptop discounts, enhancing the event's success.",
      image: RamdanEventImgSrc,
      link: "https://www.instagram.com/reel/CrOqXRigSWN/?utm_source=ig_web_copy_link",
    },
    {
      title: "Judge at the Future Engineers World Robot Olympiad",
      description:
        "Honored to have judged 14 local teams at the Future Engineers WORLD ROBOT OLYMPIAD in Palestine. We're sending two exceptional teams to the global competition in Panama.",
      image: FutureEngineersImgSrc,
      link: "https://www.facebook.com/acsbzu/posts/pfbid0gvHwK6QDjDUgKahUGRdjpjVqo25fe2HwKtPFrzRc9azYjD7Mc4hSVKxnd9dnboixl",
    },
    {
      title: "Web Development Bootcamp",
      description:
        "Conducted a successful 24-hour training camp at Birzeit University, teaching web development with a focus on 'Django and ReactJS' to sixteen participants for academic project application.",
      image: BootcampImgSrc,
      link: "https://www.facebook.com/acsbzu/posts/pfbid0TEfRuYP77FDkxWYemXRRuFtHD5HXazmC3rcxtYaW192QgnV17PnAXvfrQg5vKU7xl",
    },
  ];
  return (
    <>
      <div className="activities pt-5">
        <h1 className="text-center mb-3">Activities</h1>

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
                      <h5>{activity.title}</h5>
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
      </div>
    </>
  );
};

export default Activities;
