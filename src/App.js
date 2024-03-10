import "./app.scss"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/Home/home.js";
import About from "./components/About me/about.js";
import Skills from "./components/Skills/skills.js";
import Contact from "./components/contact/contact.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/button.js"
import { Container,Navbar } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      </Route>
      
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
