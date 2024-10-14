import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import ContactUs from "./components/ContactUs";

import SecondPage from "./components/SecondPage";
import HomePage from "./components/HomePage";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/services" element={<SecondPage />} />
          <Route path="/services" element={<SecondPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
