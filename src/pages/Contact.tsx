import ContactForm from "../components/ContactForm/ContactForm";
import DeliveryComponent from "../components/DeliveryComponent/DeliveryComponent";
import SocialFollowComponent from "../components/SocialFollowComponent/SocialFollowComponent";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <ContactForm />
      <DeliveryComponent />
      <SocialFollowComponent />
    </div>
  );
}

export default Contact;
