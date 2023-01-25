import Homepage from "./elements/homepage/homepage";
import Projects from "./elements/homepage/projects";
import Navbar from "./elements/navbar/navbar"
// import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Homepage />
      <Projects />
    </>
  );
}

export default App;
