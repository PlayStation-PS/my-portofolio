import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "service", label: "Service" },
    { to: "myskill", label: "My Skill" },
    { to: "projects", label: "My Projects" },
    { to: "contact", label: "Contact", offset: -10 },
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`py-3 ${scrolled ? "bg-dark shadow-sm navbar-scrolled" : "bg-transparent navbar-top"
        }`}
      style={{
        backdropFilter: "blur(12px)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="border-0"
          style={{ filter: "invert(1)" }}
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-3">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                className="nav-link nav-item-custom fw-semibold"
                to={item.to}
                smooth
                duration={500}
                offset={item.offset ?? -70}
                spy
                hashSpy
                style={{
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  color: scrolled ? "#f8f9fa" : "#e2e6ea",
                  fontSize: "1rem",
                  letterSpacing: "0.5px",
                }}
                activeStyle={{
                  color: "#0dcaf0",
                  borderBottom: "2px solid #0dcaf0",
                  paddingBottom: "3px",
                }}
              >
                {item.label}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>{`
        .navbar-top {
          background-color: rgba(0, 0, 0, 0.15) !important;
        }

        .navbar-scrolled {
          background-color: rgba(0, 0, 0, 0.9) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .nav-item-custom {
          position: relative;
        }

        /* Efek hover + animasi underline */
        .nav-item-custom::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0%;
          height: 2px;
          background: #0dcaf0;
          transition: width 0.3s ease-in-out;
        }

        .nav-item-custom:hover::after {
          width: 100%;
        }

        .nav-item-custom:hover {
          color: #0dcaf0 !important;
          transform: scale(1.05);
          text-shadow: 0 0 10px rgba(13, 202, 240, 0.6);
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            background-color: rgba(0, 0, 0, 0.95);
            padding: 1rem;
            border-radius: 1rem;
          }

          .nav-link {
            display: block;
            text-align: center;
            margin: 0.6rem 0;
          }
        }
      `}</style>
    </Navbar>
  );
};

export default NavigationBar;