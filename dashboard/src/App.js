import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
// import Switch from "react-switch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Information from "./pages/Information";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
