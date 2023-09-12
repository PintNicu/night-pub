import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./WelcomeComponent.module.css";

function WelcomeComponent() {
  return (
    <Container className={`p-4 ${styles.welcomeComponentContainer}`}>
      <Row className="text-center">
        <Col xs={12}>
          <h2 className="display-4">Lorem ipsum!</h2>
        </Col>
        <hr className={styles.welcomeComponentHr} />
        <Col xs={12}>
          <p className="lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            accusamus assumenda veniam atque, deleniti explicabo aliquam ab
            vitae est dolor?
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default WelcomeComponent;
