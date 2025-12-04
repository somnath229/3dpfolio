import react, {useRef} from 'react'
import bgVideo from "../assets/bg.mp4"

export default function VideoText() {
  const wrapperStyle = {
    position: "relative",
    width: "90%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: "1rem",
    padding: "2rem",
    opacity: "0.8",
  };

  const videoStyle = {
    position: "absolute",
    width: "120%",
    height: "120%",
    objectFit: "cover",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex:"-1"
  };

  const textStyle = {
    position: "relative",
    fontSize: "4rem",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "10px",
    color: "white",
    zIndex: "1",
  }; 

  return (
    <div style={wrapperStyle}>
      {/* The video behind the text mask */}
      <video autoPlay muted loop playsInline style={videoStyle}>
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Text that clips the video */}
      <h1 style={textStyle}> Let’s Build Something Together</h1>
    </div>
  );
}
