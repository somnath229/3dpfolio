import React from "react";
import Form from "./Form";
import styled from "styled-components";
import '../App.css'
const DivItem = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export default function Contact() {
  return (
    <div
      style={{
        width: "80%",
        height: "100%",
        background: "linear-gradient( to right, #141e30, #243b55)", //blue
        color: "white",
        border: "2px solid white",
        borderRadius: "1rem",
        padding: "2rem",
        margin: "1rem 0",
        letterSpacing: "1px",
      }}>
      <div>
        <h1>Contact Us: </h1>
        <h4>(Fill out the form below to get in touch with us.)</h4>
      </div>
      <div
        className="formdiv"
        style={{
          display: "flex",
          alignItems: "center",
        }}>
        <div className="form">
          <Form />
        </div>
        <DivItem
          className="map"
          style={{
            width: "30%",
            height: "26rem",
            border: "2px solid white",
            borderRadius: "1rem",
            overflow: "hidden",
          }}>
          <iframe
            width="600"
            height="450"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA"></iframe>
        </DivItem>
      </div>
    </div>
  );
}
// background: "linear-gradient( to right, #008bcf, #ffffff)", // occean
// background: "linear-gradient( to right, #ff9966, #ffc3a0)", // pink
// background: "linear-gradient( to right, #cc2b5e, #753a88)", // purple
// background: "linear-gradient(to right,purple,#ad46ff,#c27aff)",
