import React, { useState, useEffect } from 'react';
import Carousel from "react-bootstrap/Carousel";
import styles from "./ImageSlider.module.css";
import { SliderImage } from '../../store/GalleryStore';
import chrisSmImage from '../../Images/ImageSliderPhotos/chris-sm.jpg';
import chrisMdImage from '../../Images/ImageSliderPhotos/chris-md.jpg';
import chrisXlImage from '../../Images/ImageSliderPhotos/chris-xl.jpg';
import kellySmImage from '../../Images/ImageSliderPhotos/kelly-sm.jpg';
import kellyMdImage from '../../Images/ImageSliderPhotos/kelly-md.jpg';
import kellyXlImage from '../../Images/ImageSliderPhotos/kelly-xl.jpg';
import pixabaySmImage from '../../Images/ImageSliderPhotos/pixabay-sm.jpg';
import pixabayMdImage from '../../Images/ImageSliderPhotos/pixabay-md.jpg';
import pixabayXlImage from '../../Images/ImageSliderPhotos/pixabay-xl.jpg';

type ImageSize = 'sm' | 'md' | 'xl';



const images: SliderImage[] = [
  { sm: chrisSmImage, md: chrisMdImage, xl: chrisXlImage, alt: "Chris" },
  { sm: kellySmImage, md: kellyMdImage, xl: kellyXlImage, alt: "Kelly" },
  { sm: pixabaySmImage, md: pixabayMdImage, xl: pixabayXlImage, alt: "Pixabay" }
];

const getImageSize = (): ImageSize => {
  if (window.innerWidth >= 1200) {
    return 'xl'
  };
  if (window.innerWidth >= 768) {
    return 'md'
  };
  return 'sm';
};

const ImageSlider: React.FC = () => {
  const [currentSize, setCurrentSize] = useState<ImageSize>(getImageSize());

  useEffect(() => {

    const handleResize = () => {
      setCurrentSize(getImageSize());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Carousel fade className={styles.carousel}>

      {images.map((image, index) => (

        <Carousel.Item key={index} className={styles.carouselItem}>

          <div className={styles.imageWrapper}>

            <img
              src={image[currentSize]}
              alt={image.alt}
              className={styles.carouselImage}
            />

          </div>

        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageSlider;