/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import person from "../images/person.png";
import menu from "../images/menu.png";

export default function NavBar() {
  const [contactOn, setContactOn] = useState(false);
  const [menuOn, setMenuOn] = useState(false);

  return (
    <>
      <nav className="web">
        <a className="link-nav" href="#">
          Daniel Cavalcanti
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
        <a href="#contact" className="link-nav">
          Contact
        </a>
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
        {menuOn && (
          <div className="menu-items">
            <a className="link-nav" href="#" onClick={() => setMenuOn(false)}>
              Daniel Cavalcanti
            </a>
            <a
              className="link-nav"
              href="#about-dev"
              onClick={() => setMenuOn(false)}
            >
              Career
            </a>
            <a
              className="link-nav"
              href="#hard-skills"
              onClick={() => setMenuOn(false)}
            >
              Hard Skills
            </a>
            {/* <a className="link-nav" href="#projects">Projects</a> */}
            <a
              className="link-nav"
              href="#soft-skills"
              onClick={() => setMenuOn(false)}
            >
              Soft Skills
            </a>
            <a
              href="#contact"
              className="link-nav"
              onClick={() => setMenuOn(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
