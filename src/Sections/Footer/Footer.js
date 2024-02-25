import "./Footer.css";
import { FaShoppingCart } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer pt-5 pb-5">
        <div className="text-center">
          <h1 className="mb-3">Like My Resume<span className="question ms-0">?</span></h1>
          <button
            className="btn btn-primary purchase-btn "
            onClick={() =>
              (window.location.href =
                "mailto:swat.ar123@gmail.com?subject=Purchase%20Website%20Resume")
            }
          >
            <h4 className="d-flex justify-content-center align-items-center m-0">
              <FaShoppingCart className=" me-3" size={20} />
              Purchase <span className="ms-2 price"> $100 </span>
            </h4>
          </button>
          {/* copy right */}
          <div className="copy-right mt-3">
            <p className="m-0 p-0">
              © 2024 Qutaiba Olayyan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
