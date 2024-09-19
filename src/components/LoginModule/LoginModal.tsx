import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert"
import { useRef, useState } from "react";
import { useAuth } from '../contexts/AuthContext'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function LoginModal(props: any) {
  const [error, setError] = useState('')
  const { signIn } = useAuth();
  const navigate = useNavigate()

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {

      setError("")
      await signIn(usernameRef.current?.value || "", passwordRef.current?.value || "");
      props.handleClose();
      navigate("/Dashboard");

    } catch (error) {

      console.log("Failed to login: ", error);
      setError("Vă rugăm reîncercați")

    }
  };

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={handleSubmit}>
            <Form.Group id="username">
              <Form.Label>Email</Form.Label>
              <Form.Control type="username" ref={usernameRef} required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            {error && <Alert variant="danger">{error}</Alert>}
          </Form>
        </Modal.Body>

        <Modal.Footer>

          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>

          <Button variant="dark" type="submit" onClick={handleSubmit}>
            Sign In
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

LoginModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default LoginModal;