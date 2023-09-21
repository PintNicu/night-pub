import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./MenuIframe.module.css"
import { useEditableInfo  } from "../contexts/EditeableInfoContext";


function MenuIframe() {
  const { editableInfo } = useEditableInfo ();

  return (
    <Container fluid className={styles.iframeContainer}>
      <Row className="justify-content-center" >
        <Col xs={12}>
          <iframe className={styles.iframe}
            src={editableInfo.menuLink}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MenuIframe"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default MenuIframe