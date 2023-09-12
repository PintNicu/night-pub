import * as yup from "yup";

const phoneRegex = /^\+?4?0?[-.\s]?(\d{2,3})?[-.\s]?\d{3}[-.\s]?\d{3,4}$/;

const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Completați câmpul")
    .max(32, "Numele este prea lung"),
  email: yup
    .string()
    .email("Adresă de e-mail invalidă")
    .required("Completați câmpul"),
  phoneNumber: yup
    .string()
    .matches(phoneRegex, "Număr de telefon invalid")
    .required("Completați câmpul"),
  message: yup
    .string()
    .required("Completați câmpul")
    .min(5, "Mesajul este prea scurt")
    .max(1000, "Mesajul este prea lung"),
});

export default contactFormSchema;
