import Form from 'react-bootstrap/Form';
import { useEditableInfo } from "../contexts/EditeableInfoContext";
import styles from "./InfoEditor.module.css";




function InfoEditor() {
  const { editableInfo, setEditableInfo } = useEditableInfo();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditableInfo((prevState: typeof editableInfo) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <hr />

      <Form className={styles.centerForm}>

        <p>Link Menu</p>

        <Form.Group controlId="menuLink">
          <Form.Control type="text" name="menuLink" value={editableInfo.menuLink} onChange={handleChange} />
        </Form.Group>

        <hr className={styles.midLine} />

        <p>Modifică informațiile afișate în formularul de contact</p>

        <Form.Group controlId="cFormAdress">
          <Form.Label>Locație</Form.Label>
          <Form.Control type="text" name="cFormAdress" value={editableInfo.cFormAdress} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="acPhone">
          <Form.Label>Nr.tel</Form.Label>
          <Form.Control type="text" name="cPhone" value={editableInfo.cPhone} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="cEmail">
          <Form.Label>Email contact</Form.Label>
          <Form.Control type="text" name="cEmail" value={editableInfo.cEmail} onChange={handleChange} />
        </Form.Group>

        <hr className={styles.midLine} />

        <p>Modifică informațiile afișate în subsolul paginii</p>

        <Form.Group controlId="phone">
          <Form.Label>Tel.</Form.Label>
          <Form.Control type="text" name="phone" value={editableInfo.phone} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" name="email" value={editableInfo.email} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Adresă</Form.Label>
          <Form.Control type="text" name="address" value={editableInfo.address} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="programMT">
          <Form.Label>Program linia 1</Form.Label>
          <Form.Control type="text" name="programMT" value={editableInfo.programMT} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="programFS">
          <Form.Label>Program linia 2</Form.Label>
          <Form.Control type="text" name="programFS" value={editableInfo.programFS} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="programSM">
          <Form.Label>Program linia 3</Form.Label>
          <Form.Control type="text" name="programSM" value={editableInfo.programSM} onChange={handleChange} />
        </Form.Group>


      </Form>

    </>
  );
}

export default InfoEditor