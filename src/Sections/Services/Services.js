import "./Services.css";
import {
  FaCode,
  FaCloud,
  FaPaintBrush,
  FaYoutube,
  FaChalkboardTeacher,
  FaBrain,
} from "react-icons/fa";

const Services = () => {
  const servicesData = [
    {
      title: "Web Development",
      icon: <FaCode className="icon" />,
      description:
        "Craft responsive websites with dynamic features for optimal user experiences.",
    },
    {
      title: "Artificial Intelligence",
      icon: <FaBrain className="icon" />,
      description:
        "Implement AI solutions for automation and intelligent data analysis.",
    },
    {
      title: "Cloud Computing",
      icon: <FaCloud className="icon" />,
      description:
        "Optimize efficiency with scalable and secure cloud-based infrastructure solutions.",
    },
    {
      title: "Graphic Design",
      icon: <FaPaintBrush className="icon" />,
      description:
        "Create visually compelling designs for effective communication and brand representation.",
    },
    {
      title: "Youtuber",
      icon: <FaYoutube className="icon" />,
      description:
        "Creating unique videos for variant topics for Computer Engineering.",
    },
    {
      title: "Mentor",
      icon: <FaChalkboardTeacher className="icon" />,
      description:
        "Building a community of skilled full-stack engineers through personalized mentorship for over 30 students.",
    },
  ];

  return (
    <>
      <div className="services">
        <div className="container">
          <h1 className="text-center pt-3">My Services</h1>
          <div className="row mt-2">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="card col-md-4 col-sm-6 d-flex align-items-center justify-content-center"
              >
                <div className="card-body text-center">
                  <div className="mb-3">{service.icon}</div>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
