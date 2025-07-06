import "./Home.css";
import myImg from "../../Assets/Home/Me.svg";

import { Background, SocialIcons, Morph } from "../../Components/index";

import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <div id="hero" className="hero">
        {/* Background Particles */}
        <div
          className="background-particle w-100 position-absolute top-0 left-0"
          style={{ zIndex: "-100" }}
        >
          <Background />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 text-center">
              {/* Image with animation border */}

              <Morph imgSrc={myImg} />
            </div>
            <div className="col-md-6 d-flex align-items-center  text-center text-md-start">
              {/* Content */}
              <div className="content ">
                <h1>
                  Hi, I'm <span className="name">Qutaiba Olayyan</span>
                </h1>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Team Lead",
                    1000,
                    "AI Researcher",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "ML/GenAI Engineer",
                    1000,
                    "Data Scientist",
                    1000,
                    "Full-Stack Developer",
                    1000,
                    "Mentor",
                    1000,
                    "Content Creator",
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1.25em", display: "inline-block" }}
                  repeat={Infinity}
                />
                <p>
                  If you're looking for efficient and effective solutions to your AI
                  challenges, I'm here to help!
                </p>
                {/* Social Icons */}
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
