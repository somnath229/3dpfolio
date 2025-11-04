import React, { useRef } from "react";
import { motion, scale, useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "../App.css";

export default function Card({ projects, color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  let fromLeft = 0;
  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem 0",
        letterSpacing: "1px",
        flexWrap: "wrap",
      }}>
      {projects.map(
        (project, index) => (
          (fromLeft = index % 2 === 0),
          (
            <motion.div
              initial={{ opacity: 0, x: fromLeft ? 100 : 100 }}
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : fromLeft ? -100 : -100,
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
              className="box-c"
              style={{
                // width: "30%",  //large screen
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                border: "2px solid",
                borderColor: color.text,
                borderRadius: "1rem",
                margin: "1rem",
                overflow: "hidden",
                boxShadow: "rgba(0, 0, 0, 0.8) 22px 23px 18px",
              }}>
              <div>
                <Tilt glareColor={"red"}>
                  <div
                    className="img"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "color-mix(in srgb, red 50%, blue 50%)",
                      borderRadius: "1rem",
                      margin: "1rem",
                    }}>
                    <img
                      src={project.img}
                      alt={project.name}
                      style={{ width: "50%" }}
                    />
                  </div>
                </Tilt>

                <div
                  className="text"
                  style={{
                    padding: "0 2rem 1rem 2rem",
                  }}>
                  <div className="name">
                    <h2>{project.name}</h2>
                  </div>
                  <div className="about">{project.about}</div>
                  <div
                    className="tech"
                    style={{
                      padding: "1rem 0",
                    }}>
                    {project.tech.map((tech, index) => (
                      <button
                        style={{
                          margin: ".2rem",
                          padding: "0.4rem 1rem",
                          background: "none",
                          borderRadius: "1rem",
                          letterSpacing: "1px",
                          color: color.text,
                        }}>
                        {tech}
                        {/* <img src={html} alt="" srcset="" style={{width:"5%"}} /> */}
                      </button>
                    ))}
                  </div>
                  <div
                    className="link"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}>
                    <button
                      style={{
                        margin: ".2rem",
                        padding: "0.4rem 1rem",
                        background: "none",
                        border: "none",
                        color: color.text,
                      }}>
                      {project.github}
                    </button>

                    <a href={project.details} target="_blank">
                      <button
                        style={{
                          margin: ".2rem",
                          padding: "0.4rem 1rem",
                          border: "none",
                          borderRadius: ".4rem",
                          color: "#ffffff",
                          cursor: "pointer",
                          background:
                            "linear-gradient( to right,  #07B9CE,#3969E7, #7D2AE7)",
                        }}>
                        {project.live}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        )
      )}
    </div>
  );
}
