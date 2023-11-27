import "./HorizontalCard.css";
import Zoom from "react-reveal/Fade";


// cards: https://codepen.io/3psy0n/pen/LYpajmX
const HorizontalCard = ({
  imageSrc,
  title,
  date,
  description,
  skills,
  link,
}) => {
  return (
    <>
   
   <Zoom>
      <article className="postcard project">
     
        <a className="postcard__img_link" target="_blank" href={link}>
          <img className="postcard__img" src={imageSrc} alt={title} />
        </a>
        <div className="postcard__text">
          <h1 className="postcard__title project">
            <a href={link} target="_blank">
              {title}
            </a>
          </h1>
          <div className="postcard__subtitle small">
            <time dateTime="2020-05-25 12:00:00">
              <i className="fas fa-calendar-alt mr-2"></i>
              {date}
            </time>
          </div>
          <div className="postcard__bar"></div>
          <p className="postcard__preview-txt">{description}</p>
          <ul className="postcard__tagbox">
            {skills.map((skill, index) => (
              <li key={index} className="tag__item skill">
                <i className="fas fa-tag mr-2"></i>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </article></Zoom>
    </>
  );
};

export default HorizontalCard;
