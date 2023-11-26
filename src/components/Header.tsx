import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleNavItem = () => {
    setToggle(!toggle);
  };

  const navItems = [
    { id: 1, navItem: "Home", path: "#home" },
    { id: 2, navItem: "Projects", path: "#projects" },
    { id: 3, navItem: "Skills", path: "#skills" },
    { id: 4, navItem: "Education", path: "#education" },
  ];

  return (
    <header className="header">
      <div className="menu-logo">
        <h2>
          <a href="#">Usman.</a>
        </h2>
        <div
          onClick={handleClick}
          className={`menu-bar ${toggle ? "active" : ""}`}
        >
          <FiMenu />
        </div>
      </div>

      <nav className={`primary-nav ${toggle ? "active" : ""}`}>
        <ul className={`nav-list ${toggle ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id} onClick={handleNavItem}>
              <a href={item.path}>{item.navItem}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
