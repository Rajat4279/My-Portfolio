import Mail from "../../assets/email.png";
import LinkedIn from "../../assets/linkedin.png";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div>
        <p className="section_text">Get in Touch</p>
        <h3 className="title" style={{marginBottom:"2rem"}}>Contact Me</h3>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={Mail}
              alt=""
              className="icon email-icon"
              style={{ cursor: "default" }}
            />
            <p className="contact_p_text">
              <a href="mailto:rajatsrivastava4279@gmail.com">Email Me</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src={LinkedIn}
              alt=""
              className="icon linkedin-icon"
              style={{ cursor: "default" }}
            />
            <p className="contact_p_text">
              <a href="https://www.linkedin.com/in/rajat9305">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
