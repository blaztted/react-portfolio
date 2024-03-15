import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/navIcon1.png";
import navIcon2 from "../assets/img/navIcon2.png";
import navIcon3 from "../assets/img/navIcon3.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects{" "}
            </Nav.Link>
            <Nav.Link
              href="#Skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              {" "}
              Skills
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/blaztted" target="_blank">
                <img src={navIcon1} alt="github icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/bruno-silva-12415617a/"
                target="_blank"
              >
                <img src={navIcon2} alt="linkedin icon" />
              </a>
              <a href="mailto:bbc.silva@gmail.com">
                <img src={navIcon3} alt="email icon" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <a
                href="https://drive.google.com/file/d/17CJRCtsbnGCrNeOGdQcm1eqbUrYCTLOR/view?usp=sharing"
                target="_blank"
              >
                <span>Resume</span>
              </a>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
