import { useScroll, motion } from "motion/react";
import AboutMe from "./components/About/AboutMe";
import Body from "./components/body/Body";
import NavBar from "./components/header/NavBar";
// import { useRef } from "react";
import Skills from "./components/skills/Skills";

function App() {
  const { scrollYProgress } = useScroll();

  const scrollToClass = (className: string) => {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main">
      <NavBar scrollToClass={scrollToClass}/>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          originX: 0,
          backgroundColor: "#ff0088",
        }}
      />
      <div className="main-body">
        <Body />
      </div>
      <div className="main-about">
      <AboutMe />
      </div> 
      <div className="main-skills">
      <Skills />
      </div>
    </div>
  );
}

export default App;
