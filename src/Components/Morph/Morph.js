import "./Morph.css";

const Morph = ({ imgSrc }) => {
  return (
    <>
      <div className="morph">
        <div className="wrap">
          <div className="circle">
            <img
              src={imgSrc}
              alt="Profile"
              className="img-fluid animated-border"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Morph;
