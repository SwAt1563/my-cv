import "./WorkExperience.css";
import { Timeline } from "../../Components/index";

const WorkExperience = () => {
  const timelinesData = [
    {
      title: "Backend Developer Internship at EXALT",
      year: "2022",
      duration: "3 Month",
      content: `During my tenure in a developer internship at <a href="https://exalt-tech.com/" target="_blank">EXALT</a>, I garnered substantial experience in a diverse array of technologies and development methodologies, encompassing HTML, CSS, Django, Celery, Redis, payment-gateway, Docker, Pytest, JS, Django Rest Framework, Heroku, AWS and Github. I worked on several projects such as online shop, social network, recruitment website, and mobile shop which helped me to improve my testing skills, deepen my understanding of web development, familiarize myself with the Django Rest Framework and develop my collaboration and teamwork skills. Additionally, I have gained experience in containerization and hosting using Docker and AWS, which helped me to improve my skills in deployment and scaling web applications.`,
    },
    {
      title: "Microsoft Mentoring Program",
      year: "2022",
      duration: "1 Year",
      content: `Engaging with the Microsoft Mentoring Program, I had the opportunity to work closely with a <a href="https://www.linkedin.com/in/benedict-berger-msft/" target="_blank">mentor</a>, gaining insights into effective teamwork, selecting team members for specialized projects, and initiating projects with a specific focus. The mentorship significantly contributed to my professional development, providing practical knowledge for future endeavors. Additionally, I completed Microsoft Learn modules on Azure fundamentals and AI, including the 'Career Essentials in Generative AI' program, a collaborative effort by Microsoft and LinkedIn. This training equipped me with practical knowledge in Azure and AI, ready to be applied in real-world projects.`,
    },
    {
      title: "Student Teacher",
      year: "2019",
      duration: "4 Years",
      content: `I am a proactive self-starter with a passion for teaching and sharing my knowledge. I have taken the initiative to create and upload a series of educational videos on <a href="https://www.youtube.com/@SwAt1563" target="_blank">my YouTube channel</a>, covering a range of topics in computer engineering, including Assembly Language Programming 8086, Machine Learning, Integrated Circuits, Real-Time and Embedded Systems. These videos have been well received by a large audience and have helped to improve my communication and teaching skills. Additionally, I have volunteered to give face-to-face lectures to computer science and computer engineering students on subjects such as Calculus, Physics, C, Java, Assembly, Data Structure, Operating System, Machine Learning, Real-Time and Embedded Systems. Recognizing the importance of practical application, I accomplished a rigorous full-stack bootcamp, culminating in a 24-hour intensive session where I successfully imparted comprehensive knowledge to 16 students.`,
    },
  ];
  return (
    <>
      <div className="work-experience">
        <h1 className="text-center pt-3 mb-5">Work Experience</h1>
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
      </div>
    </>
  );
};

export default WorkExperience;
