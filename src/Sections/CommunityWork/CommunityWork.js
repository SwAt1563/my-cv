import "./CommunityWork.css";
import CommunityWorkImgSrc from "../../Assets/CommunityWork/CommunityWork.png";

import React, { useState } from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";

import { MdImageSearch } from "react-icons/md";

const CommunityWork = () => {
  const communityWorkData = [
    { label: "University ambassadors", hours: 30 },
    { label: "Social initiative", hours: 20 },
    { label: "Debate station", hours: 20 },
    { label: "Receiving new students", hours: 110 },
    { label: "Guidance meeting", hours: 20 },
    { label: "Musafer Yatta", hours: 25 },
    { label: "Planting trees", hours: 30 },
    { label: "Martyrs' Park", hours: 15 },
    { label: "Dressing committee", hours: 100 },
    { label: "Coordinate recruitment day logistics", hours: 20 },
    { label: "Judging Olympiad competition", hours: 100 },
    { label: "Critical market 2023", hours: 30 },
    { label: "Pink October marathon", hours: 25 },
    { label: "Marathon children", hours: 35 },
    { label: "Cataloging and arranging books", hours: 35 },
    { label: "Cleaning a heritage place", hours: 20 },
  ];

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="community-work pt-5 pb-5">
        <h1 className="text-center mb-3">
          Community Work
          <MdImageSearch
            onClick={openModal}
            className="model-icon ms-3"
            title="Community Work Table"
          />
        </h1>

        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <img
              src={CommunityWorkImgSrc}
              alt="Community Work Table"
              style={{ width: "100%" }}
            />
          </Modal.Body>
        </Modal>

        <Container>
          <Row>
            {communityWorkData.map((work, index) => (
              <Col key={index} md={6}>
                <div className="custom-card m-2">
                  <span className="label">{work.label}</span>
                  <span className="hours">{work.hours} h</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CommunityWork;
