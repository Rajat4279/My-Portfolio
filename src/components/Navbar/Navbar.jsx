import "./Navbar-Desktop.css";
import "./Navbar-Hamburger.css";
import { useEffect, useState } from "react";

const navLinks = [
  {
    path: "#about",
    text: "About",
  },
  {
    path: "#experience",
    text: "Experience",
  },
  {
    path: "#project",
    text: "Projects",
  },
  {
    path: "#contact",
    text: "Contact",
  },
];

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prevMenuState) => !prevMenuState);
  };

  const navItems = navLinks.map((link, index) => (
    <li key={index}>
      <a href={link.path}>{link.text}</a>
    </li>
  ));

  const navHamburgerItems = navLinks.map((link, index) => (
    <li key={index} onClick={toggleMenu}>
      <a href={link.path}>{link.text}</a>
    </li>
  ));

  return (
    <>
      {isDesktop ? (
        <nav id="desktop-nav">
          <div className="logo">Rajat</div>
          <div>
            <ul className="nav-links">{navItems}</ul>
          </div>
        </nav>
      ) : (
        <nav id="hamburger-nav">
          <div className="logo">Rajat</div>
          <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
            <div className="hamburger-icon" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`hamburger-links ${isMenuOpen ? "open" : ""}`}>
              {navHamburgerItems}
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
