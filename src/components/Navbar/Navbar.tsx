import {
  Container as NavContainer,
  Nav,
  Navbar as NavbarUI,
} from "react-bootstrap";
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import NavBrand from "./NavbarBrand/NavBrand";
import styles from "./Navbar.module.css";
import LoginModal from "../LoginModule/LoginModal";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <NavbarUI collapseOnSelect expand="md" bg="black" variant="dark">
      <Button onClick={handleShow} className={styles.hiddenButton} variant="dark">
        <NavBrand />
      </Button>
      <NavbarUI.Toggle aria-controls="responsive-navbar-nav" />
      <NavbarUI.Collapse id="responsive-navbar-nav">
        <NavContainer className={styles.navbarContainer}>
          <Nav className={`me-auto ${styles.navbarNav}`}>
            <Nav.Link to="/" as={NavLink} className={styles.navLink}>
              Acasă
            </Nav.Link>
            <Nav.Link to="/AboutUs" as={NavLink} className={styles.navLink}>
              Despre noi
            </Nav.Link>
            <Nav.Link to="/Menu" as={NavLink} className={styles.navLink}>
              Menu
            </Nav.Link>
            <Nav.Link to="/Events" as={NavLink} className={styles.navLink}>
              Evenimente
            </Nav.Link>
            <Nav.Link to="/Gallery" as={NavLink} className={styles.navLink}>
              Galerie
            </Nav.Link>
            <Nav.Link to="/Contact" as={NavLink} className={styles.navLink}>
              Contact
            </Nav.Link>
          </Nav>
        </NavContainer>
      </NavbarUI.Collapse>
    </NavbarUI>
    <LoginModal show={show} handleClose={handleClose} />
    </>
  );
}

export default Navbar;
