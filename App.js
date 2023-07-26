import { BrowserRouter as Router , Routes,Route  } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Footerone from "./components/Footerone";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
        <Footerone/>
      </Router>
    </>
  );
}

export default App;
