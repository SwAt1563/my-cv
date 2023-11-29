import "./Education.css";
import { EducationItem } from "../../Components";

import { Section } from "../../Components/index";

import { educationData } from "../../Data/Education";

const Education = () => {
 
  return (
    <>
      <Section id="education" title="Education">
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
      </Section>
    </>
  );
};

export default Education;
