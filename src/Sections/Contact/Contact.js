import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";

import { contactData } from "../../Data/Contact";
const Contact = () => {
  return (
    <>
      <div id="contact" className="contact pt-3 pb-3">
        <Container>
          <Row>
            {contactData.map((contact, index) => (
              <Col
                md={4}
                key={index}
                className="col-item "
              >
                <div className="contact-item ">
                  <div className="contact-icon">{contact.icon}</div>
                  <div className="contact-info">
                    <h5>{contact.title}</h5>
                    <p>{contact.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
