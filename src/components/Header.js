import logo from "../images/Vector.svg";
import "../index.css";

function Header() {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        <img src={logo} alt="лого Место" className="header__logo-vector" />
      </a>
    </header>
  );
}

export default Header;
