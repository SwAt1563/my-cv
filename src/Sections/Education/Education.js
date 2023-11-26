import "./Education.css";
import { EducationItem } from "../../Components";

const Education = () => {
  const educationData = [
    {
      year: "2019-2023",
      title: "Birzeit University - Ramallah, Palestine",
      description: "3.6 GPA - Computer Engineering Bachelors",
    },
    {
      year: "2018-2019",
      title: "Deir Al-Ghosoun Boys' Secondary School - Tulkarm, Palestine",
      description: "High School, Graduate with 97.7 mark",
    },
  ];
  return (
    <>
      <div className="education pt-3 pb-3">
        <h1 className="text-center mb-5 ">Education</h1>
        <div className="container items">
          {educationData.map((item, index) => (
            <div key={index} className="bold-section">
              <EducationItem
                year={item.year}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
