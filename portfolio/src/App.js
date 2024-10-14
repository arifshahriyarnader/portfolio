
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import About from './components/About/About';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
