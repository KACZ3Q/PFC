import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home'
import Projects from "./Components/Pages/Projects";
import Testimonials from "./Components/Pages/Testimonials";
import AboutUs from "./Components/Pages/AboutUs";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'  element={ <Home />}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
