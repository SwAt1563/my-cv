import { Card, Container, Button } from "react-bootstrap";
import "./Tutorials.css";
import "react-multi-carousel/lib/styles.css";

import ICImageSrc from "../../Assets/Tutorials/IC.png";
import MLImageSrc from "../../Assets/Tutorials/ML.png";
import AssemblyImageSrc from "../../Assets/Tutorials/Assembly.jpg";
import RealTimeImageSrc from "../../Assets/Tutorials/RealTime.png";

import { Link } from "react-router-dom"; // Import Link from react-router-dom

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tutorials = () => {
  const courses = [
    {
      title: "RealTime and Embedded Systems Course",
      imageSrc: RealTimeImageSrc,
      date: "2023/07",
      link: "https://www.youtube.com/playlist?list=PLYgImg3VllLpKDPXtSNBBlqbR39lJ27-S",
      description:
        "Explore real-time systems in C, Docker, PIC16F877A, FreeRTOS, Arduino.",
    },
    {
      title: "Machine Learning With Python Course",
      imageSrc: MLImageSrc,
      date: "2023/01",
      link: "https://www.youtube.com/playlist?list=PLYgImg3VllLrt9JjYw52kWXRyBLlYqBjc",
      description:
        "This hands-on program introduces machine learning concepts and practical Python implementation comprehensively.",
    },
    {
      title: "Integrated Circuits Course using PSpice",
      imageSrc: ICImageSrc,
      date: "2022/11",
      link: "https://www.youtube.com/playlist?list=PLYgImg3VllLoRguBWWXj2lSXP6cbgAmf3",
      description:
        "Equip yourself with skills to design and simulate electronic circuits using PSpice in this immersive program.",
    },
    {
      title: "Assembly Language Programming x86 Course",
      imageSrc: AssemblyImageSrc,
      date: "2022/04",
      link: "https://www.youtube.com/playlist?list=PLYgImg3VllLpg-3EL4HkHiqzqT8NpGyJ2",
      description:
        "For aspiring programmers, master x86 assembly in this immersive course, delving into low-level computing understanding.",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    focusOnSelect: true,
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
      <div className="tutorials pt-5 pb-3">
        <h1 className="text-center mb-3">Tutorials</h1>
        
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
        </div>
    </>
  );
};

export default Tutorials;
