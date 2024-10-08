import "./app.scss"
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/Home/home.js";
import About from "./components/About me/about.js";
import Skills from "./components/Skills/skills.js";
import Contact from "./components/contact/contact.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Notfound from "./components/404/notfound.js";
function App() {
  return (
    <div className="App">
      <Router  >
    <Routes>
      <Route  path="/" element={<Layout />}>
      <Route index element={<Home />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Notfound />}  />
      </Route>
    </Routes>
      </Router>
    </div>
  );
}

export default App;
