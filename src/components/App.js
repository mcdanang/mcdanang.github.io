import '../styles/App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import Welcome from './Welcome';
import Projects from './Projects';

// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Animated = () => {
  const location = useLocation();
  return (
      <AnimatePresence mode='wait' >
          <Routes location={location} 
              key={location.pathname}>
              <Route exact path="/" element={<Welcome/>}></Route>
              <Route path="/work" element={<Projects/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
      </AnimatePresence>
  )
}

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Animated/>
          <Footer/>
        </Router>
    </div> 
  );
}

export default App;
