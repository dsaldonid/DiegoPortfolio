import AboutMe from "./Components/AboutMe/AboutMe"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Projects from "./Components/Projects/Projects"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;
