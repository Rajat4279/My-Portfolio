import Project_Card from "../Project_Card/Project_Card";
import Arrow_Pic from "../../assets/arrow.png";
import "./Projects.css";
import Chikitsa_Salah from "../../assets/ChikitsaSalah.webp";
import BookMyShow from "../../assets/BookMyShow.png";
import BookRecordManagement from "../../assets/BookRecordManagement.png";

function Projects() {
  const contactSection = () => {
    window.location.href = "#contact";
  };
  return (
    <section id="project">
      <p className="section_text ">Browse My Recent</p>
      <h3 className="title" style={{ marginBottom: "2rem" }}>
        Projects
      </h3>
      <div className="experience-details-container">
        <div className="projects-about-container">
          <Project_Card
            picture={Chikitsa_Salah}
            project="Chikitsa Salah"
            github="https://github.com/dipesh2508/Chikitsa-Salah"
            liveDemo="https://chikitsa-salah-y6bc.vercel.app/"
          />
          <Project_Card
            picture={BookMyShow}
            project="Book My Show Clone"
            github="https://github.com/Rajat4279/book-my-show-clone"
            liveDemo="https://book-my-show-clone-rajat4279.vercel.app/"
          />
          <Project_Card
            picture={BookRecordManagement}
            project="Book Management"
            github="https://github.com/Rajat4279/Book-Record-Management"
            liveDemo=""
          />
        </div>
      </div>
      <img
        src={Arrow_Pic}
        alt="Arrow-Pic"
        className="icon profile-arrow"
        onClick={contactSection}
      />
    </section>
  );
}

export default Projects;
