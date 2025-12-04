import React, { useState, useRef, useEffect } from "react";

// Inline-CSS React carousel component
// Uses images available at /mnt/data/1000065377.jpg (you can replace with your own)

export default function CarouselCards() {
  const images = [
    "/mnt/data/1000065377.jpg",
    "/mnt/data/1000065377.jpg",
    "/mnt/data/1000065377.jpg",
    "/mnt/data/1000065377.jpg",
  ];

  const [index, setIndex] = useState(0);
  const length = images.length;
  const containerRef = useRef(null);

  useEffect(() => {
    // keep focused card centered in small JS-driven carousel
    const container = containerRef.current;
    if (!container) return;
    const child = container.children[index];
    if (child) {
      const offset =
        child.offsetLeft - (container.clientWidth - child.clientWidth) / 2;
      container.scrollTo({ left: offset, behavior: "smooth" });
    }
  }, [index]);

  const prev = () => setIndex((i) => (i - 1 + length) % length);
  const next = () => setIndex((i) => (i + 1) % length);

  // INLINE STYLES
  const styles = {
    page: {
      fontFamily:
        "'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(220,215,255,0.95))",
      minHeight: "100vh",
      padding: 30,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    carouselShell: {
      width: 380,
      maxWidth: "92%",
      position: "relative",
    },
    track: {
      display: "flex",
      gap: 18,
      overflowX: "auto",
      scrollBehavior: "smooth",
      paddingBottom: 30,
      // hide native scrollbar
      msOverflowStyle: "none",
      scrollbarWidth: "none",
    },
    cardWrap: {
      flex: "0 0 78%",
      maxWidth: 320,
      borderRadius: 22,
      background: "#2b2b2b",
      padding: 12,
      boxSizing: "border-box",
      boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
      position: "relative",
    },
    imageBox: {
      width: "100%",
      height: 300,
      borderRadius: 16,
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#111",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },
    playButton: {
      position: "absolute",
      width: 76,
      height: 76,
      borderRadius: 38,
      background: "rgba(255,255,255,0.95)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
    },
    triangle: {
      width: 0,
      height: 0,
      borderLeft: "14px solid #111",
      borderTop: "10px solid transparent",
      borderBottom: "10px solid transparent",
      marginLeft: 2,
    },
    titleBox: {
      marginTop: 14,
      color: "#fff",
      fontSize: 22,
      lineHeight: "1.05",
      fontWeight: 700,
      padding: "6px 8px",
    },
    bottomReflection: {
      transform: "scaleY(-1)",
      width: "100%",
      height: 36,
      marginTop: 18,
      borderRadius: 12,
      overflow: "hidden",
      opacity: 0.35,
      filter: "blur(8px)",
    },
    dotRow: {
      display: "flex",
      gap: 8,
      justifyContent: "center",
      marginTop: 18,
    },
    dot: (active) => ({
      width: active ? 26 : 8,
      height: 8,
      borderRadius: 8,
      background: active ? "#111" : "rgba(0,0,0,0.2)",
      transition: "all 220ms ease",
    }),
    navBtn: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 36,
      height: 36,
      borderRadius: 18,
      background: "rgba(255,255,255,0.9)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      cursor: "pointer",
    },
    navLeft: { left: -12 },
    navRight: { right: -12 },
    // hide scrollbar styles applied to element via style attribute not always supported across browsers
  };

  return (
    <div style={styles.page}>
      <div style={styles.carouselShell}>
        <div
          ref={containerRef}
          style={styles.track}
          // hide scrollbar in webkit
          className="hide-scrollbar">
          {images.map((src, i) => (
            <div
              key={i}
              style={{
                ...styles.cardWrap,
                transform: i === index ? "scale(1)" : "scale(0.96)",
                transition: "transform 280ms ease",
              }}>
              <div style={styles.imageBox}>
                <img src={src} alt={`card-${i}`} style={styles.img} />
                <div
                  style={{
                    ...styles.playButton,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%,-50%)",
                  }}>
                  <div style={styles.triangle} />
                </div>
              </div>

              <div style={styles.titleBox}>
                {i === 0 ? (
                  <>
                    <div style={{ fontSize: 20 }}>
                      She Manages It All. We Manage
                    </div>
                    <div style={{ fontSize: 20 }}>the Tyres</div>
                  </>
                ) : (
                  <div style={{ fontSize: 20 }}>
                    She Manages It All. We Manage
                  </div>
                )}
              </div>

              {/* reflection */}
              <div style={styles.bottomReflection}>
                <img
                  src={src}
                  alt={`refl-${i}`}
                  style={{ ...styles.img, transform: "scaleY(-1)" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.4), rgba(255,255,255,0.0))",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* nav buttons */}
        <div style={{ ...styles.navBtn, ...styles.navLeft }} onClick={prev}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div style={{ ...styles.navBtn, ...styles.navRight }} onClick={next}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6L15 12L9 18"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* dots */}
        <div style={styles.dotRow}>
          {images.map((_, i) => (
            <div
              key={i}
              style={styles.dot(i === index)}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* small inline style tag to hide scrollbars in webkit and add safe-touch \n       (We intentionally keep this small; it's still inline CSS but inserted via style element) */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar{ display:none }
      `}</style>
    </div>
  );
}
