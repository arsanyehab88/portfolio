import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="https://github.com/arsanyehab88" className="text-decoration-none" target='_blank'> <i className="fa-brands fa-github text-white fs-5"></i> </a>
                <a href="https://www.linkedin.com/in/arsany-ehab-711037246"target='_blank' className=" text-decoration-none"><i className="fa-brands fa-linkedin-in text-white fs-5"></i></a>
                <a href="mailto:arsany.ehab87@gmail.com" target='_blank'  className=" text-decoration-none"><i className="fa-solid fa-envelope text-white fs-5"></i></a>
              </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
