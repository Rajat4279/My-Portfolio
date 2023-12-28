import "./Experience.css";
import Arrow_Pic from "../../assets/arrow.png";
import CheckMark_Icon from "../../assets/checkmark.png";

const frontendArticles = [
  {
    title: "HTML",
    level: "Experienced",
  },
  {
    title: "CSS",
    level: "Experienced",
  },
  {
    title: "JavaScript",
    level: "Intermediate",
  },
  {
    title: "React",
    level: "Intermediate",
  },
  {
    title: "Material UI",
    level: "Basic",
  },
  {
    title: "TypeScript",
    level: "Basic",
  },
];

const backendArticles = [
  {
    title: "Node JS",
    level: "Intermediate",
  },
  {
    title: "Express JS",
    level: "Intermediate",
  },
  {
    title: "MongoDB",
    level: "Intermediate",
  },
  {
    title: "Git",
    level: "Intermediate",
  },
];

function Experience() {
  const projectSection = () => {
    window.location.href = "#project";
  };

  return (
    <section id="experience">
      <p className="section_text">Explore My</p>
      <h3 className="title">Experience</h3>
      <div className="experience-details-container">
        <div className="about-container">
          <div className="details-container">
            <h2 className="experience_sub-title">Frontend Technology</h2>
            <div className="article-container">
              {frontendArticles.map((article, index) => (
                <article key={index}>
                  <img
                    src={CheckMark_Icon}
                    alt="experience_icon"
                    className="icon"
                  />
                  <div>
                    <h3>{article.title}</h3>
                    <p>{article.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience_sub-title">Backend Technology</h2>
            <div className="article-container">
              {backendArticles.map((article, index) => (
                <article key={index}>
                  <img
                    src={CheckMark_Icon}
                    alt="experience_icon"
                    className="icon"
                  />
                  <div>
                    <h3>{article.title}</h3>
                    <p>{article.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src={Arrow_Pic}
        alt="Arrow-Pic"
        className="icon profile-arrow"
        onClick={projectSection}
      />
    </section>
  );
}

export default Experience;
