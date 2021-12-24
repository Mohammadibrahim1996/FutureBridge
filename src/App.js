import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { NaviBar } from "./Components/NaviBar";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <div>
      <Router>
        <NaviBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
