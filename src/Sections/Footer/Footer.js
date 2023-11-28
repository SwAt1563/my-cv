import "./Footer.css";
import { FaShoppingCart } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer pt-5 pb-5">
        <div className=" text-center">
          <h1 className="mb-3">Like My Resume?</h1>
          <button
            className="btn btn-primary purchase-btn"
            onClick={() =>
              (window.location.href =
                "mailto:swat.ar123@gmail.com?subject=Purchase%20Website%20Resume")
            }
          >
            <h5>
              <FaShoppingCart className="me-3" size={20} />
              Purchase for $100
            </h5>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
