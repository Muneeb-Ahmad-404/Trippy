import Hero from "../component/Hero"
import heroImage from "../assets/night.jpg"
import Footer from "../component/Footer";
import AboutUs from "../component/AboutUs"

function About() {
  return (
    <>
      <Hero
      className="hero-mid"
      heroImage={heroImage}
      title="About"
      text=""
      btnText=""
      url="/about"
      btnClass=""
      />
      <AboutUs/>
      <Footer/> 
    </>
  );
}

export default About;
