import "./EducationItem.css";

import YearDesign from "./YearComponent/YearComponent";
const EducationItem = ({ year, title, description }) => {
  return (
    <>
      <div className="education-item ">
        <YearDesign year={year} />
        <div className="education-details">
          <h4 className="title">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default EducationItem;
