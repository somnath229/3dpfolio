import React from "react";

export default function Security() {
  const styles = {
    card: {
      width: "300px",
      height: "180px",
      borderRadius: "16px",
      background: "rgba(255, 255, 255, 0.05)", // transparent white overlay
      backdropFilter: "blur(10px)", // blur for glass effect
      WebkitBackdropFilter: "blur(10px)", // for Safari
      border: "1px solid rgba(255, 255, 255, 0.1)", // subtle border
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      color: "#fff",
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      cursor: "pointer",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    },
    title: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "8px",
    },
    desc: {
      fontSize: "14px",
      color: "#9ca3af",
    },
  };

  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(hover ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div style={styles.title}>TaskFlow Pro</div>
      <div style={styles.desc}>
        A Kanban-style project management tool built with React and Firebase.
      </div>
    </div>
  );
}
