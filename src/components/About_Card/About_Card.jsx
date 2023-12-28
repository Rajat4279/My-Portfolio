import "./About_Card.css";

function About_Card(props) {
  return (
    <div className="detail-container">
      <img
        src={props.picture}
        alt="Experience-Pic"
        className="
      icon"
      />
      <h3>{props.title}</h3>
      <p>
        {props.years !== undefined ? <p>{props.years} years</p> : null}
        {props.college !== undefined ? <p>{props.college}</p> : null}
        {props.school !== undefined ? <p>{props.school}</p> : null}
        {props.subHeading !== undefined ? <p>{props.subHeading}</p> : null}
      </p>
    </div>
  );
}

export default About_Card;
