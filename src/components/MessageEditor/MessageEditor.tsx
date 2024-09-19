import React from 'react';
import Form from 'react-bootstrap/Form';
import { useEditableInfo } from "../contexts/EditeableInfoContext";
import styles from "./MessageEditor.module.css";

function MessageEditor() {
    const { editableInfo, setEditableInfo } = useEditableInfo();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditableInfo((prevState: typeof editableInfo) => ({ ...prevState, [name]: value }));
    };

    return (
        <div className={styles.messageEditorContainer}>
            <hr />
            <h3>Editare Mesaj Promoțional</h3>

            <Form>

                <Form.Group controlId="companyMessage">

                    <Form.Label>Mesajul promoțional</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="companyMessage"
                        value={editableInfo.companyMessage}
                        onChange={handleChange}
                        placeholder="Introduceți mesajul promoțional al companiei"
                    />
                </Form.Group>


                <Form.Group controlId="welcomeMessageShort">

                    <Form.Label>Mesajul scurt de bun venit!</Form.Label>
                    <Form.Control
                        type="text"
                        name="welcomeWelcomeMessageShort"
                        value={editableInfo.companyWelcomeMessageShort}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="welcomeMessageLong">

                    <Form.Label>Mesajul lung de bun venit!</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="welcomeMessageLong"
                        value={editableInfo.companyWelcomeMessageLong}
                        onChange={handleChange}
                        placeholder="Introduceți mesajul de bun venit."
                    />
                </Form.Group>

            </Form>
        </div>
    );
}

export default MessageEditor