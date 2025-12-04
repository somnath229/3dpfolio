import React, { useState, useRef, useEffect } from "react";

export default function Testimonial() {
  // ⭐ TECH STACK CAROUSEL DATA
  const tech = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      title: "React.js",
      subtitle: "Frontend Library",
      color: "#61DBFB",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      title: "Node.js",
      subtitle: "Backend Runtime",
      color: "#6cc24a",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      title: "Express.js",
      subtitle: "Backend Framework",
      color: "#ffffff",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      title: "MongoDB",
      subtitle: "NoSQL Database",
      color: "#4DB33D",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      title: "JavaScript",
      subtitle: "Programming Language",
      color: "#F0DB4F",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      title: "TypeScript",
      subtitle: "Typed JavaScript",
      color: "#3178c6",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      title: "Git",
      subtitle: "Version Control",
      color: "#F1502F",
    },
  ];

  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index];
    if (card) {
      const scrollX =
        card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
      track.scrollTo({ left: scrollX, behavior: "smooth" });
    }
  }, [index]);

  const styles = {
    page: {
      width: "80%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    //   background: "linear-gradient(180deg,#ffffff,#dcd2ff,#bfe7ff)",
      borderRadius: "1rem",
    },
    shell: {
      width: "100%",
      position: "relative",
    },
    track: {
      display: "flex",
      gap: 20,
      overflowX: "auto",
      scrollbarWidth: "none",
    },
    card: (active, color) => ({
      flex: "0 0 18%",
      background: "#1e1e1e",
      borderRadius: 22,
      padding: 20,
      textAlign: "center",
      color: "#fff",
      border: `2px solid ${color}40`,
      boxShadow: active
        ? `0 10px 30px ${color}70`
        : "0 6px 20px rgba(0,0,0,0.2)",
      transform: active ? "scale(1)" : "scale(0.94)",
      transition: "0.35s",
    }),
    techLogo: {
      width: 80,
      height: 80,
      margin: "0 auto",
      display: "block",
      objectFit: "contain",
    },
    title: {
      marginTop: 14,
      fontSize: 20,
      fontWeight: "700",
    },
    subtitle: {
      marginTop: 6,
      fontSize: 14,
      opacity: 0.8,
    },
    dots: {
      marginTop: 20,
      display: "flex",
      justifyContent: "center",
      gap: 8,
    },
    dot: (active) => ({
      width: active ? 26 : 10,
      height: 8,
      borderRadius: 8,
      background: active ? "#000" : "#777",
      transition: "0.3s",
      cursor: "pointer",
    }),
  };

  return (
    <div style={styles.page}>
      <div style={styles.shell}>
        <div ref={trackRef} style={styles.track} className="hide-scrollbar">
          {tech.map((t, i) => (
            <div
              key={i}
              style={styles.card(i === index, t.color)}
              onClick={() => setIndex(i)}>
              <img src={t.src} style={styles.techLogo} />
              <div style={styles.title}>{t.title}</div>
              <div style={styles.subtitle}>{t.subtitle}</div>
            </div>
          ))}
        </div>

        <div style={styles.dots}>
          {tech.map((_, i) => (
            <div
              key={i}
              style={styles.dot(i === index)}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar{ display:none }
      `}</style>
    </div>
  );
}
