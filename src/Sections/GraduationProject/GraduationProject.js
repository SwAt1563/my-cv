import "./GraduationProject.css";
import ReactLoading from "react-loading";

const GraduationProject = () => {
  return (
    <>
      <div className="graduation-project pt-5">
        <h1 className="text-center">GraduationProject</h1>
        <div className="loading-container">
          <ReactLoading
            type={"bars"}
            color={"var(--color-hightlight)"}
            height={"25%"}
            width={"25%"}
            className="text-center"
            delay={1000}
          />
        </div>
      </div>
    </>
  );
};

export default GraduationProject;
