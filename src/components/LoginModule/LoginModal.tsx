import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRef } from "react";
import { useAuth } from '../contexts/AuthContext'
import PropTypes from 'prop-types';


function LoginModal(props: any) {
  
  const { signIn } = useAuth();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await signIn(usernameRef.current?.value || "", passwordRef.current?.value || "");
      props.handleClose();
    } catch (error) {
      console.log("Failed to login: ", error);
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
        {/* Attach the onSubmit event handler */}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="username">
            <Form.Label>Email</Form.Label>
            <Form.Control type="username" ref={usernameRef} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        {/* This should now trigger handleSubmit when clicked */}
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