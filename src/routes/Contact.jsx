import Hero from "../component/Hero"
import heroImage from "../assets/2.jpg"
import Footer from "../component/Footer";
import ContactForm from "../component/ContactForm";

function Contact() {
  return (
    <>
      <Hero
      className="hero-mid"
      heroImage={heroImage}
      title="Contact"
      text=""
      btnText=""
      url="/contact"
      btnClass=""
      /> 
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default Contact;
