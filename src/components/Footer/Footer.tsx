import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo2 from "../../Images/Logo/zeplogo2.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className="main-footer mt-auto bg-black">
      <Container className={styles.footerContainer}>
        <Row className="text-center">
          <Col md={4} className={`p-4 ${styles.footerColumn}`}>
            <img src={logo2} alt="" className={styles.footerLogo} />
            <hr className="light" />
            <p>Tel. 0765 255 801</p>
            <p>casazepelin1929@gmail.com</p>
            <p>Strada. Slobozia | Nr. 15 | Sector 4 | București</p>
          </Col>
          <Col md={4} className={`p-4 ${styles.footerColumn}`}>
            <hr className="light" />
            <h5>Program</h5>
            <hr className="light" />
            <p>Luni - Joi: 12:01 - 00:01</p>
            <p>Vineri - Sâmbătă: 12:01 - 05:00</p>
            <p>Duminică: 12:01 - 00:00</p>
          </Col>
          <Col md={4} className={`p-4 ${styles.footerColumn}`}>
            <div className={`frame ${styles.footerIframe}`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45575.41746281517!2d26.023046768267836!3d44.44416435638162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ffeb2b1c9245%3A0x97e54ffc22857c9!2sZepelin%201929%20-%20Food%2C%20drinks%20%26%20dance!5e0!3m2!1sen!2sro!4v1684101912580!5m2!1sen!2sro"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
