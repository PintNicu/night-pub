import { ChangeEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styles from './ImageUploader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { storage } from "../../firebase";
import { ref, uploadBytes } from 'firebase/storage';



function ImageUploader() {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<string>("Bar");

  const onSelectedImageHandler = (event: ChangeEvent<HTMLInputElement>) => {

    const selectedFiles = event.target.files;

    if (selectedFiles) {
      const selectedImagesArray = Array.from(selectedFiles);
      const imagesArray = selectedImagesArray.map((file) => {

        return URL.createObjectURL(file);
      });

      setImageUpload(selectedFiles[0])

      setSelectedImages([...selectedImages, ...imagesArray]);
    }
  };

  const uploadImageHandler = () => {
    if (imageUpload == null) {
      return;
    }
    const randomNumber = Math.floor(1000 + Math.random() * 9000)

    const imageRef = ref(storage, `${selectedFolder}/${imageUpload.name + randomNumber}`);

    uploadBytes(imageRef, imageUpload).then(() => {
      alert(`Image Uploaded to ${selectedFolder} folder`);
      setSelectedImages([]);
    });
  }

  const removeImageHandler = (imageToRemove: string) => {
    setSelectedImages(selectedImages.filter((image) => image !== imageToRemove))
  }

  const handleFolderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedFolder(event.target.value);
  }

  return (

    <section className={styles.centerEverything}>

      <Form.Group controlId="images" className="text-center">

        <Form.Group controlId="folderSelect" className="mb-3">

          <Form.Label>Select Folder</Form.Label>

          <Form.Select value={selectedFolder} onChange={handleFolderChange}>
            <option value="Bar">Bar</option>
            <option value="Evenimente">Evenimente</option>
            <option value="Restaurant">Restaurant</option>
          </Form.Select>

        </Form.Group>

        <Form.Label className="d-block">
          + Imaginile adăugate vor fi postate în galerie!
          <br />
        </Form.Label>

        <Form.Control
          type="file"
          name="images"
          onChange={onSelectedImageHandler}
          multiple
          accept="image/png, image/jpeg, image/webp"
          className="mx-auto d-block"
        />
      </Form.Group>

      <Container className={styles.centerEverything}>

        {selectedImages && selectedImages.map((image) => {
          return (

            <Container key={image} className={styles.images}>

              <img src={image} height="100" alt="upload" className={styles.image} key={image} />

              <Button className={styles.buttonRemove} variant="outline-warning" onClick={() => removeImageHandler(image)}>
                <FontAwesomeIcon icon={faTrashCan} className={styles.btnIcon} />
              </Button>

            </Container>
          )
        })}

      </Container>
      <Button variant="dark" className="mt-2" onClick={uploadImageHandler} >Upload</Button>
    </section>
  );
}

export default ImageUploader;
