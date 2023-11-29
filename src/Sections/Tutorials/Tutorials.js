import { Card, Container, Button } from "react-bootstrap";
import "./Tutorials.css";
import "react-multi-carousel/lib/styles.css";



import { Link } from "react-router-dom"; // Import Link from react-router-dom

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Section } from "../../Components/index";

import { courses } from "../../Data/Tutorials";

const Tutorials = () => {
  

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    focusOnSelect: false,
    centerMode: false,

    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <Section id="tutorials" title="Tutorials">
        <Container className="contents">
          <Slider {...settings}>
            {courses.map((course, index) => (
              <div key={index}>
                <Card className="card m-3">
                  <Card.Img
                    variant="top"
                    src={course.imageSrc}
                    alt="Card image image-fluid cap"
                  />
                  <Card.Body>
                    <Card.Title>
                      <h4>{course.title}</h4>
                    </Card.Title>
                    <Card.Text>
                      <p>{course.description}</p>
                    </Card.Text>
                  </Card.Body>
                  {/* move buttom to right */}
                  <div className="button-cont text-end m-1">
                    <Link to={course.link} target="_blank">
                      <Button className="watch-btn w-25" variant="primary">
                        <h6 className="p-0 m-0">Watch</h6>
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </Container>
      </Section>
    </>
  );
};

export default Tutorials;
