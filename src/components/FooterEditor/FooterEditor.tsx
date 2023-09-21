import Form from 'react-bootstrap/Form';
import { useFooterInfo } from "../contexts/FooterInfoContext";
import styles from "./FooterEditor.module.css";




function FooterEditor() {
    const { footerInfo, setFooterInfo } = useFooterInfo();
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFooterInfo((prevState: typeof footerInfo) => ({ ...prevState, [name]: value }));
      };
    
      return (
        <>
          <hr />
          <Form className={styles.centerForm}>
          <p>Modifică informațiile afișate în subsolul paginii</p>
            <Form.Group controlId="phone">
              <Form.Label>Tel.</Form.Label>
              <Form.Control type="text" name="phone" value={footerInfo.phone} onChange={handleChange} />
            </Form.Group>
    
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" name="email" value={footerInfo.email} onChange={handleChange} />
            </Form.Group>
    
            <Form.Group controlId="address">
              <Form.Label>Adresă</Form.Label>
              <Form.Control type="text" name="address" value={footerInfo.address} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Program linia 1</Form.Label>
              <Form.Control type="text" name="address" value={footerInfo.programMT} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Program linia 2</Form.Label>
              <Form.Control type="text" name="address" value={footerInfo.programFS} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Program linia 3</Form.Label>
              <Form.Control type="text" name="address" value={footerInfo.programSM} onChange={handleChange} />
            </Form.Group>

          </Form>
        
        </>
      );
}

export default FooterEditor