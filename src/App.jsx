import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Career from "./components/Career";

import SecondPage from "./components/SecondPage";
import HomePage from "./components/HomePage";

import Navbar from "./components/Navbar";
import LastPage from "./components/LastPage";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<SecondPage />} />
          <Route path="/contact" element={<LastPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
