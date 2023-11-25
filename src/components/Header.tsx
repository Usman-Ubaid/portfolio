import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <header className="header">
      <div className="menu-logo">
        <h2>
          <a href="#">Usman.</a>
        </h2>
        <FiMenu className="bx bx-menu" />
      </div>

      <nav className="primary-nav">
        <ul className="nav-list">
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
