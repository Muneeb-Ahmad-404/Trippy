import Footer from "../component/Footer";
import "../component/SignUpStyles.css";
import Hero from "../component/Hero"
import heroImage from "../assets/10.jpg"


export default function SignUp(){
    return(
        <>
            <Hero
            className="hero-mid"
            heroImage={heroImage}
            title="Sign Up"
            text=""
            btnText=""
            url="/signup"
            btnClass=""
            /> 
            <div className="outline">
                <div className="signup-form">
                    <form action="">
                        <div className="fields">
                            <input type="text" placeholder="email or username" />
                            <input type="password" placeholder="password"/>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}