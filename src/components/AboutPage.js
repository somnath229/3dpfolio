import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const DivItem = styled.div`
  @media (max-width: 768px) {
    flex-direction:column;
  }
`;
export default function AboutPage({ color }) {
  const styles = {
    page: {
      color: color.text,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "column",
    },

    main: {
      flex: 1,
      width: "100%",
    },

    paragraph: { lineHeight: 1.7, maxWidth: "600px" },
    section: { marginTop: "60px" },
    subheading: {
      fontWeight: 600,
      marginBottom: "24px",
    },

    // Layout for items with icons
    itemRow: {
      display: "flex",
      alignItems: "start",
      justifyContent: "start",
      gap: "16px",
      marginBottom: "20px",
    },

    itemText: {
      display: "flex",
      alignItems: "start",
      justifyContent: "start",
      flexDirection: "column",
    },
    itemTitle: { fontWeight: 500, fontSize: "15px" },
    itemSubtitle: { color: "#94a3b8", fontSize: "13px" },
  };

  return (
    <div style={styles.page}>
      {/* Main Content */}
      <main style={styles.main}>
        <DivItem
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "start",
            padding: "0 2rem",
          }}>
          {/* Education */}
          <section style={styles.section}>
            <h2 style={styles.subheading}>Education</h2>

            <div style={styles.itemRow}>
              <div style={styles.iconBox}>
                <FontAwesomeIcon icon={faUserGraduate} size="2x" />
              </div>
              <div style={styles.itemText}>
                <span style={styles.itemTitle}>M.S. in Computer Science</span>
                <p style={styles.itemSubtitle}>
                  University of Technology | 2016 - 2018
                </p>
              </div>
            </div>
            <div style={styles.itemRow}>
              <div style={styles.iconBox}>
                <FontAwesomeIcon icon={faUserGraduate} size="2x" />
              </div>
              <div style={styles.itemText}>
                <span style={styles.itemTitle}>M.S. in Computer Science</span>
                <p style={styles.itemSubtitle}>
                  University of Technology | 2016 - 2018
                </p>
              </div>
            </div>
          </section>
          {/* Professional Experience */}
          <section style={styles.section}>
            <h2 style={styles.subheading}>Professional Experience</h2>

            <div style={styles.itemRow}>
              <div style={styles.iconBox}>
                <FontAwesomeIcon icon={faBriefcase} size="2x" />
              </div>
              <div style={styles.itemText}>
                <span style={styles.itemTitle}>Senior Software Engineer</span>
                <p style={styles.itemSubtitle}>
                  Tech Company Inc. | 2021 - Present
                </p>
              </div>
            </div>
          </section>
        </DivItem>
      </main>
    </div>
  );
}
