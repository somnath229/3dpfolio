import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Skills from "./Skills";

export default function About({ color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <>
      <motion.di
        // initial={{ opacity: 0 }} //start hidden
        // whileInView={{ opacity: 1 }} //visible when in view
        // animate={{ y: -100 }} // up
        // viewport={{ once: true, amount: 0.5 }} //trigger when "amount" is visible
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 25 }}
        transition={{
          duration: 2,
          ease: "easeOut",
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
          border: "2px solid",
          borderColor: "color.text",
          borderRadius: ".5rem",
          padding: "2rem",
          margin: "1rem 0",
          overflow: "hidden",
        }}>
        <div>
          <h1>About Me</h1>
        </div>
        <div>
          <h4>
            Hi, I'm &nbsp;
            <span style={{ color: "blue", letterSpacing: "1px" }}>
              Somnath Dubey
            </span>
            , a passionate Full Stack Developer who loves building clean,
            scalable and user-friendly web applications. I enjoy turning ideas
            into reality through modern teachnologies and efficient code. My
            goal is to create impactful digital solutions that deliver seamless
            user experiences and solve real-world problems.
          </h4>
          <h4>
            Full Stack Developer who loves building clean, scalable and
            user-friendly web applications. I enjoy turning ideas into reality
            through modern teachnologies and efficient code. Full Stack
            Developer who loves building clean, scalable and user-friendly web
            applications. I enjoy turning ideas into reality through modern
            teachnologies and efficient code. Full Stack Developer who loves
            building clean, scalable and user-friendly web applications. I enjoy
            turning ideas into reality through modern teachnologies and
            efficient code.
          </h4>
        </div>
        <div className="skills">
          <Skills />
        </div>
      </motion.di>
    </>
  );
}
