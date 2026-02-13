import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Project from "./pages/Project";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/About";

const App = () => {
  const location = useLocation();

  return (
    <div className="body1">
      <ScrollToTop />
      <main id="main-content" role="main">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
