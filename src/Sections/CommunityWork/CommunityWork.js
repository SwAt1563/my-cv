import "./CommunityWork.css";
import CommunityWorkImgSrc from "../../Assets/CommunityWork/CommunityWork.png";

import React, { useState } from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";

import { MdImageSearch } from "react-icons/md";

import { Section } from "../../Components/index";

import { communityWorkData } from "../../Data/CommunityWork";

const CommunityWork = () => {
 

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Section
        id="community-work"
        title="Community Work"
        icon={
          <MdImageSearch
            onClick={openModal}
            className="model-icon ms-2"
            title="Community Work Table"
          />
        }
      >
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
      </Section>
    </>
  );
};

export default CommunityWork;
