import React, { useState, useEffect } from "react";

export default function TextSpan() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("|");
  const textOptions = [
    " Software Engineer",
    " FrontEnd Developer",
    " BackEnd Developer",
    " Full-Stack Developer",
  ];
  const typingSpeed = 400;
  const delayBetweenWords = 2000;

  useEffect(() => {
    let timer;
    let charIndex = 0;

    const typeNextCharacter = () => {
      if (charIndex < textOptions[index].length - 1) {
        setDisplayedText(
          (prevText) => prevText + textOptions[index][charIndex]
        );

        charIndex++;
        timer = setTimeout(typeNextCharacter, typingSpeed);
      } else {
        clearTimeout(timer);
        setTimeout(() => {
          setDisplayedText("|");
          setIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        }, delayBetweenWords);
      }
    };

    typeNextCharacter();

    return () => clearTimeout(timer);
  }, [index]);

  const textStyle = {
    fontWeight: "900",
    lineHeight: "1.3",
    color: "#71717b",
    margin: "0",
    overflow: "hidden",
    whiteSpace: "nowrap",
  };

  return (
    <div>
      <span style={textStyle}>{displayedText}</span>
    </div>
  );
}
