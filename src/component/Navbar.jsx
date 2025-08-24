import { Component } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  z;
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars "
            }
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <Link to={item.url}>
                <li key={index} className={item.className}>     
                  <i className={item.icon}></i>
                  {item.title}
                </li>
              </Link>
            );
          })}
          <button className="sign-btn">Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
