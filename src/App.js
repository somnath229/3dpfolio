import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProjectNew from "./components/ProjectNew";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Social from "./components/Social";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [home, setHome] = useState(true);
  const [white, setWhite] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    console.log("clicked", +ref);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="flex"
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        background: color.background,
      }}>
      <Router>

        <Navbar
          color={color}
          onAboutclick={() => scrollToSection(aboutRef)}
          onContactclick={() => scrollToSection(contactRef)}
          setHome={setHome}
          home={home}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Layout
                color={color}
                aboutRef={aboutRef}
                contactRef={contactRef}
                setHome={setHome}
              />
            }
          />
          <Route path="/projects" element={<ProjectNew color={color} />} />
        </Routes>
        <div style={{ fontSize: "24px", color: "#6e8efb" }}>
          <FontAwesomeIcon icon={faCoffee} bounce /> Enjoy your coffee!
        </div>
        <Footer color={color} />
        <Social
          color={color}
          setColor={setColor}
          setWhite={setWhite}
          white={white}
        />
      </Router>
    </div>
  );
}

export default App;
