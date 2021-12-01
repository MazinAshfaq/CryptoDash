import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NewsPage from "./pages/NewsPage";
import Search from "./pages/Search";
import CoinPage from "./pages/CoinPage";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/coinpage/:id" element={<CoinPage />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
