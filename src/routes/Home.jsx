import Hero from "../component/Hero"
import heroImage from "../assets/12.jpg"
import Destination from "../component/Destination";
import Trip from "../component/Trip";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <Hero
      className="hero"
      heroImage={heroImage}
      title="Your Journey Your Story"
      text="Choose Your Favourite Destination."
      btnText="Travel Plan"
      url="/"
      btnClass="show"
      />
      <Destination/> 
      <Trip/>
      <Footer/> 
    </>
  );
}

export default Home;
