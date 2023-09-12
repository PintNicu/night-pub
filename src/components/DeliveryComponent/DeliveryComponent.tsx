import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import glovoLogo from "../../Images/BrandLogos/govoLogo.png";
import styles from "./DeliveryComponent.module.css";

function DeliveryComponent() {
  return (
    <Container fluid className={`p-4 ${styles.deliveryComponentContainer}`}>
      <Row className="text-center p-4">
        <Col xs={12}>
          <div className="Delivery">
            <Image
              src={glovoLogo}
              className={styles.glovo}
              alt="Glovo Logo"
              rounded
            />
            <h3>Glovo</h3>
            <Button
              variant="outline-dark"
              size="lg"
              className={styles.glv}
              href="https://glovoapp.com/ro/ro/bucuresti/zepelin-1929-buc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descoperă meniul de livrări!
            </Button>
            <p></p>
          </div>
        </Col>
      </Row>
      <hr className="my-4" />
    </Container>
  );
}

export default DeliveryComponent;
