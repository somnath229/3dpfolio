import React, { useState } from "react";
import Security from "./Security";
import ProfileNew from "./ProfileNew";

export default function Profile() {
  const [activePage, setActivePage] = useState("Profile");

  const styles = {
    page: {
      width: "100%",
      display: "flex",
      height: "100%",
      fontFamily: "Inter, sans-serif",
      backgroundColor: "#0d1117",
      color: "#fff",
    },
    sidebar: {
      width: "250px",
      backgroundColor: "#0d1117",
      borderRight: "1px solid #1e2631",
      padding: "30px 20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    sidebarTop: {},
    sidebarProfile: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "30px",
    },
    avatar: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#2b313b",
    },
    sidebarNav: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    navItem: (active) => ({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 15px",
      borderRadius: "8px",
      cursor: "pointer",
      backgroundColor: active ? "#1e2631" : "transparent",
      color: active ? "#fff" : "#9ca3af",
      fontWeight: active ? "500" : "400",
    }),
    logout: {
      fontSize: "14px",
      color: "#9ca3af",
      cursor: "pointer",
      padding: "10px 15px",
    },
    main: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    navbar: {
      height: "60px",
      borderBottom: "1px solid #1e2631",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 30px",
      backgroundColor: "#0d1117",
    },
    navLinks: {
      display: "flex",
      gap: "25px",
      color: "#9ca3af",
      fontSize: "15px",
    },
    bookBtn: {
      backgroundColor: "#2563eb",
      color: "#fff",
      border: "none",
      padding: "10px 18px",
      borderRadius: "8px",
      fontWeight: "500",
      cursor: "pointer",
    },
    profileWrapper: {
      flex: 1,
      padding: "40px 60px",
    },
    breadcrumb: {
      fontSize: "14px",
      color: "#9ca3af",
      marginBottom: "20px",
    },
    sectionTitle: {
      fontSize: "24px",
      fontWeight: "600",
      marginBottom: "8px",
    },
    sectionSubtitle: {
      fontSize: "14px",
      color: "#9ca3af",
      marginBottom: "30px",
    },
  };

  // Titles that appear when clicking sidebar items
  const titles = {
    Profile: {
      breadcrumb: "My Account / Profile",
      title: "Profile Information",
      subtitle: "Update your photo and personal details here.",
      page: <ProfileNew />,
    },
    "Booking History": {
      breadcrumb: "My Account / Booking History",
      title: "Booking History",
      subtitle: "history",
      page: <ProfileNew />,
    },
    "Payment Methods": {
      breadcrumb: "My Account / Payment Methods",
      title: "Payment Methods",
      subtitle: "pay",
      page: <ProfileNew />,
    },
    Security: {
      breadcrumb: "My Account / Security",
      title: "Security",
      subtitle: "sec",
      page: <Security />,
    },
    Preferences: {
      breadcrumb: "My Account / Preferences",
      title: "Preferences",
      subtitle: "pref",
      page: <ProfileNew />,
    },
  };

  const current = titles[activePage];

  return (
    <div style={styles.page}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarTop}>
          <div style={styles.sidebarProfile}>
            <div style={styles.avatar}></div>
            <div>
              <div style={{ fontWeight: "600" }}>John Doe</div>
              <div style={{ color: "#9ca3af", fontSize: "13px" }}>
                john.doe@email.com
              </div>
            </div>
          </div>

          <div style={styles.sidebarNav}>
            {Object.keys(titles).map((key) => (
              <div
                key={key}
                style={styles.navItem(activePage === key)}
                onClick={() => setActivePage(key)}>
                {key}
              </div>
            ))}
          </div>
        </div>

        <div style={styles.logout}>Log Out</div>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        {/* Navbar */}
        <div style={styles.navbar}>
          <div style={{ fontSize: "20px", fontWeight: "600" }}>ParkEasy</div>
          <div style={styles.navLinks}>
            <div>Find Parking</div>
            <div>Locations</div>
            <div>Pricing</div>
            <div>Support</div>
          </div>
          <button style={styles.bookBtn}>Book Now</button>
        </div>

        {/* Profile / Other Pages */}
        <div style={styles.profileWrapper}>
          <div style={styles.breadcrumb}>{current.breadcrumb}</div>
          <div style={styles.sectionTitle}>{current.title}</div>
          <div style={styles.sectionSubtitle}>{current.subtitle}</div>
          <div style={{width:"100%"}}>{current.page}</div>

          {/* {activePage === "Profile" && (to only show profile )} */}
        </div>
      </div>
    </div>
  );
}
