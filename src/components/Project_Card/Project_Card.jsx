import "./Project_Card.css";

function Project_Card(props) {
  return (
    <div className="project-details-container">
      <div className="project-article-container">
        <img src={props.picture} alt="project-pic" className="project_pic" />
      </div>
      <h2 className="article-sub-title">{props.project}</h2>
      <div className="btn-container">
        <button className="btn project-btn btn-color-2">
          <a href={props.github}>Github</a>
        </button>
        <button className="btn project-btn btn-color-1">
          <a href={props.liveDemo} style={{ color: "white" }}>
            Live Demo
          </a>
        </button>
      </div>
    </div>
  );
}

export default Project_Card;
