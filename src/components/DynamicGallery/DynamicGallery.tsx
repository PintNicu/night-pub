import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function DynamicGallery() {
  const imageContext = (require as any).context('../images', false, /\.(jpg|jpeg|webp)$/);
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
          {images.map((imgSrc, index) => (
            <Col lg={4} md={4} sm={6} xs={12} key={index} className="mb-4">
              <div
                // className="image-container"
                style={{
                  paddingBottom: "75%", // Aspect ratio 4:3
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onClick={() => handleShow(index)}
              >
                <Image
                  src={imgSrc}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>

        <Modal show={showImg} onHide={() => setShowImg(false)} size="lg">
          <Modal.Body>
            <img
              src={images[selectedImgIndex]}
              alt="Selected"
              className="w-100"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handlePrevious}>
              Previous
            </Button>
            <Button variant="secondary" onClick={handleNext}>
              Next
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default DynamicGallery