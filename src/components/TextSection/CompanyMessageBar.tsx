import Container from "react-bootstrap/Container";
import styles from "./CompanyMessageBar.module.css";
function CompanyMessageBar() {
  return (
    <>
      <Container fluid className={`p-4 ${styles.CompanyMessageBarContainer}`}>
        <p className="lead">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil in
          doloribus eveniet et blanditiis quisquam delectus vero natus ducimus
          ut.
        </p>
      </Container>
    </>
  );
}

export default CompanyMessageBar;
