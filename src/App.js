import "./App.css";
import Skills from "./components/Skills/Skills";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Project from "./components/project/Project";
import CursorTrail from "./components/SmokeCursor";

function App() {
  return (
    <>
      <CursorTrail />
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Qualification />
        <Project />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
