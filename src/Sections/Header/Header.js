import "./Header.css";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";

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
          <Link className="navbar-brand" to="/#">
            <h3 className="name">QUTAIBA OLAYYAN</h3>
            <h6 className="field">Software Engineering</h6>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
