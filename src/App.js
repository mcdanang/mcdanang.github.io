import './styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import Projects from './components/Projects';

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
              <Route exact path="/porto-react/" element={<Welcome/>}></Route>
              <Route path="/porto-react/work" element={<Projects/>}></Route>
              <Route path="/porto-react/contact" element={<Contact/>}></Route>
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
