import Carousel from "react-bootstrap/Carousel";
import styles from "./ImageSlider.module.css";
import ImageSlider1 from "../../Images/ImageSliderPhotos/1marek-piwnicki-2jXDeCH11l8-unsplash.jpg";
import ImageSlider2 from "../../Images/ImageSliderPhotos/2marek-piwnicki-3xs5yZ1JBVA-unsplash.jpg";
import ImageSlider3 from "../../Images/ImageSliderPhotos/3marek-piwnicki-IEi7lWx7XiA-unsplash.jpg";

function ImageSlider() {
  return (
    <Carousel data-bs-theme="dark" className={styles.carousel}>
      <Carousel.Item className={styles.carouselItem} interval={5000}>
        <img
          src={ImageSlider1}
          alt="First slide"
          className={styles.carouselImage}
        />
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem} interval={5000}>
        <img
          src={ImageSlider2}
          alt="Second slide"
          className={styles.carouselImage}
        />
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem} interval={5000}>
        <img
          src={ImageSlider3}
          alt="Third slide"
          className={styles.carouselImage}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
