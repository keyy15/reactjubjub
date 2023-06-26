import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About'
import Portfolio from './pages/Portfolio';
import Contact from '../src/pages/Contact';
import Service from './pages/Service';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<About />} />
          <Route path="/update" element={<Service />} />
          <Route path="/about" element={<Portfolio />} />
          <Route path="/login" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
