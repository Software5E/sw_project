import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => (
  <div>
    <img
      src="/404.gif"
      style={{
        width: 800,
        height: 800,
        display: "block",
        margin: "auto",
        position: "relative"
      }}
      alt="404 Page not found!"
    />
    <center
      style={{
        padding: 10
      }}
    >
      <Link to="/">Return to Home Page</Link>
    </center>
  </div>
);
export default NotFound;
