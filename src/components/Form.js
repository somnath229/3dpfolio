import React from "react";

export default function Form() {
  return (
    <div>
      <div
        className="form"
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          border: "2px solid white",
          borderRadius: "1rem",
          width: "100%",
          margin: "4rem 0",
          padding: "2rem 4rem",
          fontSize: "1.2rem",
          textAlign: "start",
        }}>
        {/* <div className="name"> */}
          <label htmlFor="Name">Name :</label>
          <input
            type="text"
            name="Name"
            id="Name"
            style={{
              width: "90%",
              margin: "1rem 0",
              borderRadius: "1rem",
              padding: "1rem",
              fontSize: "1rem",
            }}
          />
        {/* </div> */}
        <label htmlFor="Email">Email :</label>
        <input
          type="text"
          name="Email"
          id="Email"
          style={{
            width: "90%",
            margin: "1rem 0",
            borderRadius: "1rem",
            padding: "1rem",
            fontSize: "1rem",
          }}
        />
        <label htmlFor="Message">Message :</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          style={{
            width: "90%",
            margin: "1rem 0",
            borderRadius: "1rem",
            padding: "1rem",
            fontSize: "1rem",
          }}
        />
        <button
          style={{
            width: "95%",
            padding: "1rem",
            margin: "1rem auto",
            borderRadius: "1rem",
            fontSize: "1rem",
            fontWeight: "800",
            letterSpacing: "2px",
          }}>
          Submit
        </button>
      </div>
    </div>
  );
}
