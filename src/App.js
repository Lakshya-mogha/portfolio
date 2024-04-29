import Intro from './components/intro/intro';
import Projects from './components/projects/projects';
import Skills from './components/skills/Skills';
import Footer from './components/footer/footer';
import AboutMe from './components/AboutMe';
function App() {
  return (
   <>
   <Intro/>
   <Skills/>
   {/* <Projects/> */}
   <AboutMe/>
   <Footer/>
   </>
  );
}

export default App;
