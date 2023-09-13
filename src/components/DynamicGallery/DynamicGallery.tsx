import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import styles from "./DynamicGallery.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';





function DynamicGallery() {
  const imageContext = (require as any).context("../../Images/GalleryImages", false, /\.(jpg|jpeg|webp)$/);
  const images: string[] = imageContext.keys().map(imageContext);

  const [showImg, setShowImg] = useState(false);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  const handleShow = (index: number) => {
    setSelectedImgIndex(index);
    setShowImg(true);
  };

  const handleNext = () => {
    setSelectedImgIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const handlePrevious = () => {
    setSelectedImgIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      }
      return prevIndex - 1;
    });
  };

  return (
    <div>
      <Container>
        <Row>
          {images.map((imageDir, index) => (
            <Col lg={4} md={4} sm={6} xs={12} key={index} className="mb-4">
              <div
                className={styles.imageContainer}
                onClick={() => handleShow(index)}
              >
                <Image
                  src={imageDir}
                  className={styles.gridImage}
                />
              </div>
            </Col>
          ))}
        </Row>

        <Modal show={showImg} onHide={() => setShowImg(false)} size="lg"  >
          <Modal.Body>
            <img
              src={images[selectedImgIndex]}
              alt="Selected"
              className="w-100"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handlePrevious}>
              <FontAwesomeIcon icon={faChevronRight} rotation={180} />
            </Button>
            <Button variant="dark" onClick={handleNext}>
              <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default DynamicGallery