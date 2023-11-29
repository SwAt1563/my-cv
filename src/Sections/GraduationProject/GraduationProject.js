import "./GraduationProject.css";
import ReactLoading from "react-loading";

import { Section } from "../../Components/index";

const GraduationProject = () => {
  return (
    <>
      <Section id="graduation-project" title="Graduation Project">
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
      </Section>
    </>
  );
};

export default GraduationProject;
