import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import About from './components/About/About';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/project" element={<Layout><Project /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
