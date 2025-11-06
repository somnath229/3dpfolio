import React from "react";
import styled from "styled-components";
import pic from "../assets/herobg.png"

const NavItem = styled.div`
  @media (min-width: 768px) {
    width: 80%;
  }
`;
export default function Contactnew() {
  return (
    <NavItem
      style={{
        // backgroundColor: "#0f172a",
        backgroundImage: `url(${pic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        color: "white",
        fontFamily: "Inter, sans-serif",
        padding: "4rem 2rem",
        borderRadius: "10px",
      }}>
      <div style={{ margin: "2rem auto" }}>
        <h1
          style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "1rem" }}>
          Let’s Build Something Together
        </h1>
        <p style={{ color: "#94a3b8", marginBottom: "4rem" }}>
          Have a project in mind or just want to connect? <br /> Drop me a
          message below or reach out through my socials.
        </p>

        <div
          style={{
            display: "flex",
            gap: "4rem",
            flexWrap: "wrap",
          }}>
          {/* Left - Form */}
          <form
            style={{
              flex: "1",
              width: "100%",
              backgroundColor: "#1e293b",
              padding: "2rem",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ flex: 1, paddingRight: "1rem" }}>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    width: "100%",
                    marginTop: "5px",
                    padding: "10px",
                    borderRadius: "6px",
                    border: "1px solid #334155",
                    backgroundColor: "#0f172a",
                    color: "white",
                  }}
                />
              </div>
              <div style={{ flex: 1, paddingRight: "1rem" }}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  style={{
                    width: "100%",
                    marginTop: "5px",
                    padding: "10px",
                    borderRadius: "6px",
                    border: "1px solid #334155",
                    backgroundColor: "#0f172a",
                    color: "white",
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "2rem", paddingRight: "1rem" }}>
              <label>Subject</label>
              <input
                type="text"
                placeholder="How can I help you?"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #334155",
                  backgroundColor: "#0f172a",
                  color: "white",
                }}
              />
            </div>

            <div style={{ marginBottom: "2rem", paddingRight: "1rem" }}>
              <label>Message</label>
              <textarea
                placeholder="Your message here..."
                rows="5"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #334155",
                  backgroundColor: "#0f172a",
                  color: "white",
                  resize: "none",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#2563eb",
                border: "none",
                borderRadius: "6px",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
              }}>
              Send Message ➤
            </button>
          </form>

          {/* Right - Contact Info */}
          <div style={{ flex: "0.6" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "20px",
              }}>
              Other Ways to Connect
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <div>
                <strong>Email</strong>
                <p style={{ color: "#94a3b8" }}>somnath.dubey9600@gmail.com</p>
              </div>
              <div>
                <strong>LinkedIn</strong>
                <p>
                  <a
                    href="http://linkedin.com/in/somnathdubey"
                    style={{ color: "#94a3b8", textDecoration: "none" }}
                    target="_blank">
                    linkedin.com/in/somnathdubey
                  </a>
                </p>
              </div>
              <div>
                <strong>GitHub</strong>
                <p>
                  <a
                    href="https://github.com/somnath229/"
                    style={{ color: "#94a3b8", textDecoration: "none" }}
                    target="_blank">
                    github.com/somnath229/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavItem>
  );
}
