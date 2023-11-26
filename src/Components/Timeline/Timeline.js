import "./Timeline.css";

const Timeline = ({ title, year, duration, content }) => {
  return (
    <>
      <div class="timeline">
        <div class="icon"></div>
        <div class="date-content">
          <div class="date-outer">
            <span class="date">
              <span class="duration">{duration}</span>
              <span class="year">{year}</span>
            </span>
          </div>
        </div>
        <div class="timeline-content">
          <h5 class="title">{title}</h5>
          <p
            className="description"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </>
  );
};

export default Timeline;
