import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./ContactForm.module.css";
import { useFormik } from "formik";
import { FormikHelpers } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faCalendarAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import ContactFormValidation from "../../validations/ContactFormValidation"; /* schema */
import emailjs from '@emailjs/browser'

interface MyFormValues {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const onSubmit = async (
  values: MyFormValues,
  actions: FormikHelpers<MyFormValues>
) => {
  console.log(values);
  console.log(actions);

  emailjs.sendForm("service_4pidr1e", 'template_clkvu4b', '#your-form-id', 'S5qxBAPukSy0uEAkE')
    .then((result: any) => {
      console.log(result.text);
      console.log("message sent")
    }, (error: any) => {
      console.log(error.text);
    });

  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function ContactComponent() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: ContactFormValidation /* schema */,
    onSubmit,
  });

  console.log(errors);
  return (
    <Container className={`block ${styles.formCard}`}>
      <Row className={`form ${styles.formColumns}`}>
        <Col md={7} className={styles.formColumn}>
          <h4>Lasă-ne un mesaj</h4>
          <hr />
          <Form id="your-form-id" onSubmit={handleSubmit} autoComplete="off" >
            <Form.Label>Nume</Form.Label>
            <Form.Group className="mb-3">
              <Form.Control
                name="name"
                type="text"
                placeholder="Numele dumneavoastră"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name && touched.name ? styles.inputError : ""}
              />
              {errors.name && touched.name && (
                <p className={styles.error}>{errors.name}</p>
              )}
              <Form.Control.Feedback type="invalid">!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Adresa de e-mail"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email ? styles.inputError : ""
                }
              />
              {errors.email && touched.email && (
                <p className={styles.error}>{errors.email}</p>
              )}
              <Form.Control.Feedback type="invalid">!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Telefon</Form.Label>
              <Form.Control
                name="phoneNumber"
                type="phoneNumber"
                id="phoneNumber"
                placeholder="Numărul de contact"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.phoneNumber && touched.phoneNumber
                    ? styles.inputError
                    : ""
                }
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <p className={styles.error}>{errors.phoneNumber}</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mesajul</Form.Label>
              <Form.Control
                name="message"
                as="textarea"
                type="text"
                spellCheck="false"
                id="message"
                rows={3}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.message && touched.message ? styles.inputError : ""
                }
              />
              {errors.message && touched.message && (
                <p className={styles.error}>{errors.message}</p>
              )}
            </Form.Group>
            <Button disabled={isSubmitting} variant="dark" type="submit" value="Send">
              Trimite
            </Button>
          </Form>
        </Col>

        <Col md={5} className={styles.adressColumn}>
          <h4>Intră în legătură cu noi!</h4>
          <hr />
          <div className={`mt-5 `}>
            <div className="d-flex">
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
              <p>
                Adresa noastră: Strada. Slobozia, Nr. 15, Sector 4, București
              </p>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <p>Contact: +4 0765 255 801 </p>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <p className={styles.emailInfo}>
                Email: casazepelin1929@gmail.com
              </p>
            </div>
            <hr />
            <div className="d-flex">
              <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
              <p>Program:</p>
            </div>
            <div className="d-flex">
              <p>Luni - Joi: 12:01 - 00:01</p>
            </div>
            <div className="d-flex">
              <p>Vineri - Sâmbătă: 12:01 - 05:00</p>
            </div>
            <div className="d-flex">
              <p>Duminică: 12:01 - 00:00</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactComponent;
