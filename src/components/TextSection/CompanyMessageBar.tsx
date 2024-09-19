import Container from "react-bootstrap/Container";
import styles from "./CompanyMessageBar.module.css";
import { companyMessage } from "./CompanyMessage";
import { useEditableInfo } from "../contexts/EditeableInfoContext";


function CompanyMessageBar() {
  const editableInfo = useEditableInfo()

  return (

    <Container fluid className={`p-4 ${styles.CompanyMessageBarContainer}`}>
      <p className="lead">
        {editableInfo.companyMessage ? editableInfo.companyMessage : companyMessage.message}
      </p>
    </Container>

  );
}

export default CompanyMessageBar;
