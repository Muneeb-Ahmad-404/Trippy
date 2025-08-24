import "./HeroStyles.css";
import heroImage from '../assets/12.jpg';

function Hero(props) {
  return (
    <>
      <div className={props.className}>
        <img alt="Hero Img" src={props.heroImage}/>
      </div>
       <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
        {props.btnText}
        </a>
       </div>
    </>
  );
}

export default Hero;
