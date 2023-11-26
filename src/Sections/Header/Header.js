import "./Header.css";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const navbar = navbarRef.current;

      if (offset > 10) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header">
        <nav ref={navbarRef} className="navbar navbar-dark">
          <ScrollLink
            className="navbar-brand"
            to="hero"
            spy={true}
            smooth={true}
            offset={-30} // Adjust the offset as needed
            duration={100} // Adjust the duration of the scroll
          >
            <h3 className="name">QUTAIBA OLAYYAN</h3>
            <h6 className="field">Software Engineering</h6>
          </ScrollLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
