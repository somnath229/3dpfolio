import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Skills from "./Skills";
import AboutPage from "./AboutPage";

export default function About({ color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  return (
    <>
      <motion.di
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 25 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        ref={ref}
        style={{
          width: "80%",
          height: "100%",
          // background: "linear-gradient( to right,  #07B9CE,#3969E7, #7D2AE7)", // CANVA
          // background: `url(${scene})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: color.text,
          border: "1px solid rgba(255, 255, 255, 0.1)", // subtle border
          boxShadow: `${color.text} 4px 4px 8px`,
          borderRadius: ".5rem",
          padding: "2rem",
          margin: "1rem 0",
          overflow: "hidden",
        }}>
        <div>
          <h1>About Me</h1>
        </div>
        <div
          style={
            {
              // color: "#71717b"
            }
          }>
          <h4>
            Hi, I'm &nbsp;
            <span style={{ color: "blue", letterSpacing: "1px" }}>
              Somnath Dubey
            </span>
            , a passionate Software Engineer and Web Developer specializing in
            building high-quality, scalable web applications. My focus is on
            creating intuitive user experiences backed by robust and efficient
            code. Welcome to my corner of the internet. A passionate Full Stack
            Developer who loves building clean, scalable and user-friendly web
            applications. I enjoy turning ideas into reality through modern
            teachnologies and efficient code. My goal is to create impactful
            digital solutions that deliver seamless user experiences and solve
            real-world problems.
          </h4>
          <h4>
            Over the years, I’ve worked with modern technologies like React,
            Node.js, Express, MongoDB, and Tailwind CSS, turning ideas into
            seamless digital experiences. My focus is always on writing
            maintainable code, optimizing performance, and creating designs that
            feel intuitive. I enjoy solving real-world problems with technology
            and continuously learning to stay ahead in this ever-evolving field.
            When I’m not coding, you’ll find me exploring new tools, refining
            UI/UX skills, or contributing to open-source projects.
          </h4>
        </div>
        <div className="experience">
          <AboutPage color={color} />
        </div>
        <div className="skills">
          <Skills />
        </div>
        {/* Resume link */}
        <footer
          style={{
            borderTop: "1px solid #1f2937",
            textAlign: "center",
            padding: "40px 0",
            color: "#94a3b8",
          }}>
          <p style={{ marginBottom: "10px" }}>
            Ready to build something great?
          </p>
          <button
            style={{
              backgroundColor: "#2563eb",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: 500,
            }}>
            <a
              href="http://https://drive.google.com/file/d/15Sn3wiaDbmXIk0elOifJbHyLDtSRs6hn/view"
              style={{ textDecoration: "none", color: "#fff" }}
              rel="noreferrer">
              Download Resume
            </a>
          </button>
        </footer>
      </motion.di>
    </>
  );
}
