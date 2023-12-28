import Profile_pic from "../../assets/profile-pic.png";
import LinkedIn from "../../assets/linkedin.png";
import GitHub from "../../assets/github.png";
import Resume from "../../assets/Resume.pdf";
import "./Profile.css";

function Profile() {
  const openResume = () => {
    window.open(Resume);
  };

  const contactSection = () => {
    window.location.href = "#contact";
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/rajat9305");
  };
  const openGitHub = () => {
    window.open("https://www.github.com/Rajat4279");
  };

  return (
    <section id="profile">
      <div className="section_pic-container">
        <img
          src={Profile_pic}
          style={{ width: "500px" }}
          alt="Rajat_Profile_Pic"
        />
      </div>
      <div className="section-container">
        <div className="section_text">
          <p className="section_text_p1">Hello, I'm</p>
          <h1 className="title">Rajat Srivastava</h1>
          <p className="section_text_p2">Web Developer</p>
        </div>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={openResume}>
            Download Resume
          </button>
          <button className="btn btn-color-1" onClick={contactSection}>
            Contact Info
          </button>
        </div>
        <div className="socials-container">
          <img
            src={LinkedIn}
            alt=""
            className="icon linkedin"
            onClick={openLinkedIn}
          />
          <img
            src={GitHub}
            alt=""
            className="icon github"
            onClick={openGitHub}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
