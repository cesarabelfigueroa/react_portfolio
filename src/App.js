import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import './App.css';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <main id="main">
        <div>
            <Home />
            <About />
            <Resume />
            <Portfolio />
            <Services />
            <Contact />
            <Footer />   
        </div>
      </main>
    </div>
  );
}

export default App;
