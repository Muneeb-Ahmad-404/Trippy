import Hero from "../component/Hero"
import heroImage from "../assets/night.jpg"
import Footer from "../component/Footer";
import Trip from "../component/Trip";

function Service() {
  return (
    <>
      <Hero
      className="hero-mid"
      heroImage={heroImage}
      title="Service"
      text=""
      btnText=""
      url="/service"
      btnClass=""
      /> 
      <Trip/>
      <Footer/>
    </>
  );
}

export default Service  ;
