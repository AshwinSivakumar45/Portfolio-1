import { BrowserRouter } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Project from './Component/Project';
import { Element } from 'react-scroll';
import Contact from './Component/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Element name="home"><Home /></Element>
        <Element name="about"><About /></Element>
        <Element name="projects"> <Project/></Element>
        <Element name="Contact"><Contact/></Element>
      </div>
    </BrowserRouter>
  );
}

export default App;
