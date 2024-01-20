import './App.css';
import Skills from './components/Skills/Skills';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';

function App() {
  return (
    <>
    <Header />
    <main>
      <Home />
      <About />
      <Skills />
      <Services />
    </main>
    </>
  );
}

export default App;
