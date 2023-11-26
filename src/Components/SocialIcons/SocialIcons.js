import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaLinkedin,
  FaGithub,
  FaBehance,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import "./SocialIcons.css";

const SocialIcons = () => {
  const iconStyle = {
    color: "white",
    width: "30px",
    height: "30px",
  };

  const iconHoverStyle = {
    color: "var(--color-hightlight)",
  };
  return (
    <>
      <div className="social-icons">
        <ul className="wrapper">
          <li className="icon">
            <Link
              to="https://www.facebook.com/qutaibaOlayyan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tooltip">Facebook</span>
              <FaFacebook />
            </Link>
          </li>
          <li className="icon">
            <Link
              to="https://www.instagram.com/qutaiba_olayyan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tooltip">Instagram</span>

              <FaInstagram />
            </Link>
          </li>

          <li className="icon">
            <Link
              to="https://www.snapchat.com/add/qutaiba_olayyan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tooltip">Snapchat</span>
              <FaSnapchat />
            </Link>
          </li>

          <li className="icon">
            <Link
              to="https://www.linkedin.com/in/qutaiba-olayyan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tooltip">Linkedin</span>
              <FaLinkedin />
            </Link>
          </li>

          <li className="icon">
            <Link
              to="https://github.com/SwAt1563"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tooltip">Github</span>
              <FaGithub />
            </Link>
          </li>

          <li className="icon">
            <Link
              to="https://www.behance.net/qutaibolayyan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tooltip">Behance</span>
              <FaBehance />
            </Link>
          </li>

          <li className="icon">
            <Link
              to="https://www.upwork.com/freelancers/~01cb3a01b965e43c1a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tooltip">Upwork</span>
              <Icon
                icon="simple-icons:upwork"
                style={iconStyle}
                onMouseEnter={(e) =>
                  (e.target.style = {
                    ...iconStyle,
                    ...iconHoverStyle,
                  })
                }
                onMouseLeave={(e) => (e.target.style = { ...iconStyle })}
              />
            </Link>
          </li>

          <li className="icon">
            <Link
              to="https://www.freelancer.com/u/swat1563"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tooltip">Freelancer</span>
              <Icon
                icon="simple-icons:freelancer"
                style={iconStyle}
                onMouseEnter={(e) =>
                  (e.target.style = {
                    ...iconStyle,
                    ...iconHoverStyle,
                  })
                }
                onMouseLeave={(e) => (e.target.style = { ...iconStyle })}
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialIcons;
