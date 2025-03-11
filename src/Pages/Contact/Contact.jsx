import ContactForm from "../../Components/ContactForm/ContactForm";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import "./Contact.css"

function Contact() {
  return (
    <div>
      <ContactForm />
      <h3 className="contact-details-title">Our Contact Details</h3>
      <ContactDetails />
      <h3 className="contact-details-title">Find Us on the Map</h3>
      <Map />

      <ContactFooter />
    
    </div>
  );
}

export default Contact;


function ContactDetails () {
  return(
    <div className="contact-details">
      <p> <strong>Email:</strong> email@zaphtours.com</p>
      <p> <strong>Phone:</strong> 0789123456</p>
      <p> <strong>Address:</strong> NAIROBI, KENYA</p>

    </div>
  )
}

function Map () {
  return (
    <div className="map-container">
      <iframe src="https://maps.google.com/maps?q=Nairobi,Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"></iframe>
    </div>
  )
}

function ContactFooter () {
  return (
    <div className="contact-footer">
      <div className="work-social">
      <div className="office-hours">
        <h3 className="contacts-details-title">
          Office Hours:
        </h3>
        <p> <strong>Monday - Friday :</strong> 8AM - 6PM</p>
        <p> <strong>Saturdays :</strong> 9AM - 2PM</p>
        <p> <strong>Sunday :</strong> CLOSED</p>
      </div>
      <div className="socials">
        <a href="#"><CiFacebook /></a>
        <a href="#"><FaWhatsapp /></a>
        <a href="#"><FaLinkedin /></a>

      </div>
      </div>
    </div>
  )
}
