import About from "./elements/homepage/About";
import Contact from "./elements/homepage/Contact";
import Homepage from "./elements/homepage/Homepage";
import Projects from "./elements/homepage/Projects";
import Navbar from "./elements/navbar/navbar"
// import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Homepage />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
