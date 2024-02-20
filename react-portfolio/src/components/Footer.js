import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/navIcon1.png";
import navIcon2 from "../assets/img/navIcon2.png";
import navIcon3 from "../assets/img/navIcon3.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col size={12} sm={6} className="text-center">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p className="text-center text-center">
              © Copyright 2024. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
