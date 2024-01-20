import './App.css';
import Skills from './components/Skills/Skills';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <>
    <Header />
    <main>
      <Home />
      <About />
      <Skills />
    </main>
    </>
  );
}

export default App;
