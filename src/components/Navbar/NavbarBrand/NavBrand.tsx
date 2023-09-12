import NavbarBrand from "react-bootstrap/NavbarBrand";
import projectLogo from "../../../Images/Logo/zeplogo1.png";
import "./NavBrand.css";

function NavbBrand() {
  return (
    <NavbarBrand>
      <img className="logo" src={projectLogo} alt="Project Logo" />
    </NavbarBrand>
  );
}

export default NavbBrand;
