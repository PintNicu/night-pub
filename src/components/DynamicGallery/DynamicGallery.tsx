import React, { useState, useMemo, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from "./DynamicGallery.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import useGalleryStore from "../../store/GalleryStore";

function DynamicGallery() {
  const { images, isLoading, errorMessage, loadImages } = useGalleryStore();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryCategories = ['Bar', 'Evenimente', 'Restaurant'];

  useEffect(() => {
    if (images.length === 0) {
      loadImages();
    }
  }, [loadImages, images.length]);

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % sortedImages.length);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? sortedImages.length - 1 : prevIndex - 1
    );
  };

  const shuffleImages = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const sortedImages = useMemo(() => {
    if (selectedCategory) {

      const categoryImages = images.filter(image => image.category === selectedCategory);

      const otherImages = images.filter(image => image.category !== selectedCategory);

      const shuffledOtherImages = shuffleImages([...otherImages]);

      return [...categoryImages, ...shuffledOtherImages];
    }
    return shuffleImages([...images]);
  }, [images, selectedCategory]);

  if (isLoading) {
    return <div>Loading gallery...</div>;
  }

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div>
      <Container>

        <div className="mb-3 mt-2 d-flex justify-content-center">

          {galleryCategories.map((category, index) => (

            <React.Fragment key={category}>

              {index > 0 && <span className="mx-2 text-dark">|</span>}

              <Button variant="dark btn-sm" onClick={() => setSelectedCategory(category)}>
                {category}
              </Button>

            </React.Fragment>
          ))}
        </div>

        <Row>
          {sortedImages.map((image, index) => (
            <Col lg={4} md={4} sm={6} xs={12} key={index} className="mb-4">
              <div
                className={styles.imageContainer}
                onClick={() => openImageModal(index)}
              >
                <Image
                  src={image.imageUrl}
                  className={styles.gridImage}
                />
              </div>
            </Col>
          ))}
        </Row>

        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">

          <Modal.Body>
            <img
              src={sortedImages[selectedImageIndex]?.imageUrl}
              alt="Selected"
              className="w-100"
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="dark" onClick={showPreviousImage}>
              <FontAwesomeIcon icon={faChevronRight} rotation={180} />
            </Button>

            <Button variant="dark" onClick={showNextImage}>
              <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </Modal.Footer>

        </Modal>

      </Container>
    </div>
  );
}

export default DynamicGallery;