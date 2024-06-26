import '../styles/hardskills.css';
import html from '../images/html.png';
import css from '../images/css.jpeg';
import js from '../images/js.png';
import react from '../images/react.png';
import reactN from '../images/react-n.png';
import mysql from '../images/mysql.webp';
import HardItem from './HardItem';
import vue from '../images/vue-logo.png';
import ts from '../images/ts.webp';
import node from '../images/node.png';
import tail from '../images/tail.png';
import mui from '../images/mui.png';
import git from '../images/git.png';

function HardSkills() {
  const skills = [
    {name: 'HTML', img: html},
    {name: 'CSS', img: css},
    {name: 'Java-Script', img: js},
    {name: 'Type-Script', img: ts},
    {name: 'React', img: react},
    {name: 'React-Native', img: reactN},
    {name: 'Vue', img: vue},
    {name: 'MySQL', img: mysql},
    {name: 'Node', img: node},
    {name: 'Tailwind', img: tail},
    {name: 'Material-Ui', img: mui},
    {name: 'Git', img: git},
  ]

  return (
    <section id="hard-skills" className="hard-skills">
      <div className="container-h2-list">
        <h2
          data-aos="fade-right"
          ata-aos-delay="300"
          data-aos-duration="800"
        >{ '<Hard Skills/>' }</h2>
        <ul className="hard-list">
          {skills.map((skill) => <HardItem item={skill} />)}
        </ul>
      </div>
    </section>
  );
}

export default HardSkills;