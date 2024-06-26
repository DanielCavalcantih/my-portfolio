import { useState } from "react";
import person from "../images/person.png";
import whats from "../images/whats.png";
import email from "../images/email.png";
import check from "../images/check.png";
import insta from "../images/qrins.jpeg";
import menu from "../images/menu.png";

export default function NavBar() {
  const [contactOn, setContactOn] = useState(false);
  const [checkOn, setCheckOn] = useState(false);
  const [menuOn, setMenuOn] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("danielcavalcanti8000@gmail.com");
    setCheckOn(true);
    setTimeout(() => {
      setCheckOn(false);
    }, 3000);
  };

  return (
    <>
      <nav className="web">
        <a className="link-nav" href="#about">
          Home
        </a>
        <a className="link-nav" href="#aboutme">
          About me
        </a>
        <a className="link-nav" href="#about-dev">
          Career
        </a>
        <a className="link-nav" href="#hard-skills">
          Hard Skills
        </a>
        {/* <a className="link-nav" href="#projects">Projects</a> */}
        <a className="link-nav" href="#soft-skills">
          Soft Skills
        </a>
        <button
          onClick={() => setContactOn(!contactOn)}
          className="button-contact"
        >
          Contact
          <img alt="" src={person} width="30" />
        </button>
        {contactOn && (
          <div
            className="contact"
            data-aos="fade-top"
            ata-aos-delay="300"
            data-aos-duration="300"
          >
            <a
              href="https://wa.me/5581984445445?text="
              target="_blank"
              rel="noreferrer"
              className="number"
            >
              <img alt="" src={whats} width={24} />
              (81) 98444-5445
            </a>
            <p className="email">
              <img alt="" src={email} width={24} />
              E-mail
              <button onClick={handleCopy} className="copy-button">
                {checkOn ? "Copied" : "Copy"}
                {checkOn && <img width={12} alt="" src={check} />}
              </button>
            </p>
            <p className="insta">@daniel_cavalcantih</p>
            <img width={180} alt="" src={insta} />
          </div>
        )}
      </nav>
      <nav className="mobile">
        <button
          className="button-menu"
          onClick={() => {
            setMenuOn(!menuOn);
            setContactOn(false);
          }}
        >
          <img width={20} src={menu} alt="" />
        </button>
        <button
          onClick={() => {
            setContactOn(!contactOn);
            setMenuOn(false);
          }}
          className="button-contact"
        >
          Contact
          <img alt="" src={person} width="30" />
        </button>
        {menuOn && (
          <div className="menu-items">
            <a className="link-nav" href="#about">
              Home
            </a>
            <a className="link-nav" href="#aboutme">
              About me
            </a>
            <a className="link-nav" href="#about-dev">
              Career
            </a>
            <a className="link-nav" href="#hard-skills">
              Hard Skills
            </a>
            {/* <a className="link-nav" href="#projects">Projects</a> */}
            <a className="link-nav" href="#soft-skills">
              Soft Skills
            </a>
          </div>
        )}
        {contactOn && (
          <div
            className="contact"
            data-aos="fade-top"
            ata-aos-delay="300"
            data-aos-duration="300"
          >
            <a
              href="https://wa.me/5581984445445?text="
              target="_blank"
              rel="noreferrer"
              className="number"
            >
              <img alt="" src={whats} width={24} />
              (81) 98444-5445
            </a>
            <p className="email">
              <img alt="" src={email} width={24} />
              E-mail
              <button onClick={handleCopy} className="copy-button">
                {checkOn ? "Copied" : "Copy"}
                {checkOn && <img width={12} alt="" src={check} />}
              </button>
            </p>
            <p className="insta">@daniel_cavalcantih</p>
            <img width={180} alt="" src={insta} />
          </div>
        )}
      </nav>
    </>
  );
}
