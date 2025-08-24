import "./styles.css";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Service from "./routes/Service.jsx";
import SignUp from "./routes/SignUp.jsx";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <Navbar/>
    </div>
  );
}
