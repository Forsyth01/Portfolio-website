import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Project from "./pages/Project";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/About";
// import Navbar from "./components/Navbar";
// import CustomCursor from "./components/Cursor";
// import Nav from "./components/Nav";

const App = () => {
  const location = useLocation();

  return (
    <div className="body1">
      {/* <Navbar /> */}
      {/* <CustomCursor /> */}
      {/* <Nav /> */}
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
