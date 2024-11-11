import "./Header.css";
import React, { useEffect, useRef } from "react";

import { Link as ScrollLink } from "react-scroll";

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
      <header id="header" className="header">
        <nav ref={navbarRef} className="navbar navbar-dark">
          <ScrollLink
            className="navbar-brand"
            to="hero"
            spy={true}
            smooth={true}
            offset={-30} // Adjust the offset as needed
            duration={300} // Adjust the duration of the scroll
          >
            <h2 className="name">QUTAIBA OLAYYAN</h2>
            <h5 className="field">Team Lead | Software Engineer | AI Engineer</h5>
          </ScrollLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
