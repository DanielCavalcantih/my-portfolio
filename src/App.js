import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMe from './Components/AboutMe';
import AboutDev from './Components/AboutDev';
import HardSkills from './Components/HardSkills';
import SoftSkills from './Components/SoftSkills';
import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

function App() {
  AOS.init();

  return (
    <>
      <NavBar />
      <AboutMe />
      <AboutDev />
      <HardSkills />
      <Projects />
      <SoftSkills />
      <Contact />
    </>
  );
}

export default App;
