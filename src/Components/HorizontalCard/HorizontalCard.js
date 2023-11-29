import "./HorizontalCard.css";
import Zoom from "react-reveal/Fade";
import { FaCalendarAlt, FaTag } from "react-icons/fa";

import { Modal, Button } from "react-bootstrap";

import { useState } from "react";

// cards: https://codepen.io/3psy0n/pen/LYpajmX
const HorizontalCard = ({
  imageSrc,
  title,
  date,
  description,
  skills,
  link,
}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Zoom>
        <article className="postcard project">
          <img
            className=" postcard__img"
            src={imageSrc}
            alt={title}
            onClick={openModal}
          />

          <Modal show={showModal} onHide={closeModal} className="model">
            <Modal.Header closeButton></Modal.Header>

            <Modal.Body>
              <img src={imageSrc} alt={title} style={{ width: "100%" }} />
              <a href={link} target="_blank" rel="noreferrer">
                <h4 className="more-info text-center mt-3">
                  <Button className="btn w-25">Show</Button>
                </h4>
              </a>
            </Modal.Body>
          </Modal>

          <div className="postcard__text">
            <h1 className="postcard__title project">
              <a href={link} target="_blank" rel="noreferrer">
                {title}
              </a>
            </h1>
            <div className="postcard__subtitle small">
              <time>
                <i className="me-2">
                  <FaCalendarAlt />
                </i>

                {date}
              </time>
            </div>
            <div className="postcard__bar"></div>
            <p className="postcard__preview-txt">{description}</p>
            <ul className="postcard__tagbox">
              {skills.map((skill, index) => (
                <li key={index} className="tag__item skill">
                  <i className="me-2">
                    <FaTag />
                  </i>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Zoom>
    </>
  );
};

export default HorizontalCard;
