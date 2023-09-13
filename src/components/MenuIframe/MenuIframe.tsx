import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./MenuIframe.module.css"
function MenuIframe() {
    return (
    <Container fluid className={styles.iframeContainer}>
      <Row noGutters className="justify-content-center" >
        <Col xs={12}>
          <iframe className={styles.iframe}
            src="https://digitalmenucheck.com/14e9ca9b-2188-42e1-9a64-d26a8b895f22/index.html"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Row>
    </Container>
      );
}

export default MenuIframe