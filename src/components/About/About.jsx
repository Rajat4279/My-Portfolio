import About_Pic from "../../assets/about-pic.png";
import Experience_Pic from "../../assets/experience.png";
import Education_Pic from "../../assets/education.png";
import Arrow_Pic from "../../assets/arrow.png";
import About_Card from "../About_Card/About_Card";
import "./About.css";

function About() {
  const experienceSection = () => {
    window.location.href = "#experience";
  };

  return (
    <section id="about">
      <p className="section_text">Get To Know More</p>
      <h1 className="about-title">About Me</h1>
      <div className="about-section-container">
        <div className="about-pic-container">
          <img src={About_Pic} alt="About Pic" className="about-pic" />
        </div>
        <div className="about-detail-container">
          <div className="about-containers">
            <About_Card
              picture={Experience_Pic}
              title={"Experience"}
              years={"1+"}
              subHeading={"Web Development"}
            />
            <About_Card
              picture={Education_Pic}
              title={"Education"}
              college={"B.E CSE :- Chandigarh University"}
              school={"12th :- Mother Teresa Mission Higher Secondary School"}
            />
          </div>
          <div className="text-container">
            <p>
              As a CSE student I want to become a skilled software developer and
              work for a leading technology company. I am passionate about
              developing innovative software solutions that can make a positive
              impact on people's lives. I aim to gain experience in various
              programming languages and frameworks, as well as build a strong
              foundation in computer science theory.
            </p>
          </div>
        </div>
      </div>
      <img
        src={Arrow_Pic}
        alt="Arrow-Pic"
        className="icon arrow"
        onClick={experienceSection}
      />
    </section>
  );
}

export default About;
