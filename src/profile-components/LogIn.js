import React from "react";
import Profile from "./Profile";
import Parking from "./Parking";
import SpaceNew from "./SpaceNew";

export default function LogIn() {
  return (
    <div style={{ width: "100%" }}>
      <h1>hello</h1>
      <div style={{ height: "100vh", margin: "4rem 0" }}>
        <Profile />
      </div>
      <div className="threed">
        {" "}
        <Parking />
        {/* <Space /> */}
        <SpaceNew />
      </div>
    </div>
  );
}
