import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";

import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import CustomCursor from "./components/Cursor";
import Nav from "./components/Nav";
import Project from "./pages/Project";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const location = useLocation();
  return (
    <div className="body1 ">
      {/* <Navbar /> */}
      {/* <Sidenav/> */}
      {/* <Side/> */}
      {/* <CustomCursor /> */}
      {/* <Navbar/> */}
      <AnimatePresence mode="sync">
      <PageTransition>
      {/* <Nav /> */}
      </PageTransition>
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <Project />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <div className="">
        <Footer />
      </div>
      {/* <Navbar /> */}
    </div>
  );
};

export default App;
