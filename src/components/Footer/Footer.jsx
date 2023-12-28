import "./Footer.css";

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

function Footer() {
  const navItems = navLinks.map((link, index) => (
    <li key={index}>
      <a href={link.path}>{link.text}</a>
    </li>
  ));

  return (
    <footer>
      <nav>
        <ul className="nav-links">{navItems}</ul>
      </nav>
      <p>Copyright &#169; 2023 Rajat Srivastava. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
