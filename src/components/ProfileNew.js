import React from "react";

export default function ProfileNew() {
  const styles = {
    profileContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
    },
    profilePhoto: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      backgroundColor: "#2b313b",
    },
    uploadButtons: {
      display: "flex",
      gap: "10px",
    },
    buttonRemove: {
      padding: "8px 16px",
      backgroundColor: "#2b313b",
      color: "#fff",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
    },
    buttonUpload: {
      padding: "8px 16px",
      backgroundColor: "#2563eb",
      color: "#fff",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
    },
    form: {
      marginTop: "40px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
    //   maxWidth: "800px",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    },
    label: {
      fontSize: "14px",
      color: "#9ca3af",
    },
    input: {
      backgroundColor: "#1e2631",
      border: "1px solid #2f3642",
      borderRadius: "8px",
      padding: "10px 14px",
      color: "#fff",
      fontSize: "15px",
      outline: "none",
    },
    formButtons: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "10px",
      marginTop: "30px",
      gridColumn: "1 / 3",
    },
    cancelBtn: {
      backgroundColor: "#2b313b",
      border: "none",
      color: "#fff",
      borderRadius: "8px",
      padding: "10px 18px",
      cursor: "pointer",
    },
    saveBtn: {
      backgroundColor: "#2563eb",
      border: "none",
      color: "#fff",
      borderRadius: "8px",
      padding: "10px 18px",
      cursor: "pointer",
    },
  };
  return (
    <div>
      <div style={styles.profileContainer}>
        <div style={styles.profilePhoto}></div>
        <div style={{ fontWeight: "600", fontSize: "16px" }}>Profile Photo</div>
        <div style={{ color: "#9ca3af", fontSize: "13px" }}>
          Upload a new photo. PNG, JPG up to 5MB.
        </div>
        <div style={styles.uploadButtons}>
          <button style={styles.buttonRemove}>Remove</button>
          <button style={styles.buttonUpload}>Upload Image</button>
        </div>
      </div>

      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Full Name</label>
          <input style={styles.input} defaultValue="John Doe" />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email Address</label>
          <input
            style={styles.input}
            defaultValue="john.doe@email.com"
            type="email"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Phone Number</label>
          <input style={styles.input} defaultValue="+1 (555) 123-4567" />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Home Address (Optional)</label>
          <input
            style={styles.input}
            defaultValue="123 Main St, Anytown, USA"
          />
        </div>
        <div style={styles.formButtons}>
          <button type="button" style={styles.cancelBtn}>
            Cancel
          </button>
          <button type="submit" style={styles.saveBtn}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
