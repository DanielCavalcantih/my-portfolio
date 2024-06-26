import About from './Components/About';
import Header from './Components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMe from './Components/AboutMe';
import AboutDev from './Components/AboutDev';
import HardSkills from './Components/HardSkills';
import SoftSkills from './Components/SoftSkills';
import NavBar from './Components/NavBar';
// import Projects from './Components/Projects';

function App() {
  AOS.init();

  return (
    <>
      <NavBar />
      <Header />
      <About />
      <AboutMe />
      <AboutDev />
      <HardSkills />
      {/* <Projects /> */}
      <SoftSkills />
    </>
  );
}

export default App;
