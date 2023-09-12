import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./SocialFollowComponent.module.css";

function SocialFollowComponent() {
  return (
    <Container fluid className="p-4">
      <Row className="text-center padding">
        <Col xs={12}>
          <h2>Follow us!</h2>
        </Col>
        <Col xs={12} className="social p-4">
          <a
            className={styles.aElement}
            href="https://www.facebook.com/Zepelin1929/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fab fa-facebook ${styles.facebook}`}></i>
          </a>
          <a
            className={styles.aElement}
            href="https://www.instagram.com/zepelin1929/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fab fa-instagram ${styles.instagram}`}></i>
          </a>
          <a
            className={styles.aElement}
            href="https://www.tripadvisor.com/Restaurant_Review-g294458-d23575229-Reviews-Zepelin_1929_Food_Drinks_and_Dance-Bucharest.html#REVIEWS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fab fa-tripadvisor ${styles.tripadvisor}`}></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default SocialFollowComponent;
