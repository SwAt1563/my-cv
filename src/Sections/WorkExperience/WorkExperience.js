import "./WorkExperience.css";
import { Timeline } from "../../Components/index";

import { Section } from "../../Components/index";

import { timelinesData } from "../../Data/WorkExperience";

const WorkExperience = () => {
  
  return (
    <>
      <Section id="work-experience" title="Work Experience">
        <div class="container">
          <div class="main-timeline">
            {timelinesData.map((timeline, index) => (
              <Timeline
                key={index}
                title={timeline.title}
                year={timeline.year}
                duration={timeline.duration}
                content={timeline.content}
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default WorkExperience;
