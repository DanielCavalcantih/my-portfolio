import "../styles/contact.css";
import whats from "../images/whats.png";
import email from "../images/email.png";
import insta from "../images/insta.png";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>{"<Contact />"}</h2>
      <div className="container-contacts">
        <a
          href="mailto:danielcavalcanti8000@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="contact"
        >
          <img alt="" src={email} width={100} />
          <h3>E-mail</h3>
          <span>danielcavalcanti8000@gmail.com</span>
        </a>
        <a
          href="https://wa.me/5581984445445?text="
          target="_blank"
          rel="noreferrer"
          className="contact"
        >
          <img alt="" src={whats} width={100} />
          <h3>Phone</h3>
          <span>(81) 98444-5445</span>
        </a>
        <a
          href="https://www.instagram.com/daniel_cavalcantih/"
          target="_blank"
          rel="noreferrer"
          className="contact"
        >
          <img alt="" src={insta} width={100} />
          <h3>Instagram</h3>
          <span>@daniel_cavalcantih</span>
        </a>
      </div>
    </section>
  );
}
