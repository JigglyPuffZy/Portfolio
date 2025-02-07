import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About'; 
import Service from './Components/Service/Service';
import Contact from './Components/Contact/Contact'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contacts" element={<Contact />} /> {/* Ensure this path is /contacts */}
      </Routes>
    </Router>
  );
};

export default App;
