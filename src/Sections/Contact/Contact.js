import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <Container className="mt-5">
          <Row>
            {/* Address Column */}
            <Col md={4}>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-info">
                  <h5>Address</h5>
                  <p>Birzeit, Ramallah, Palestine</p>
                </div>
              </div>
            </Col>

            {/* Phone Column */}
            <Col md={4}>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-info">
                  <h5>Phone</h5>
                  <p>+97268187266</p>
                </div>
              </div>
            </Col>

            {/* Email Column */}
            <Col md={4}>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-info">
                  <h5>Email</h5>
                  <p>swat.ar123@gmail.com</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
