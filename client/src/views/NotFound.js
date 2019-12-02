import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdbreact";

const width1 = "51%";
const height1 = "50%";

const NotFound = () => (
  <div className="four">
    <img
      src="/404.gif"
      style={{
        width: width1,
        height: height1,
        display: "block",
        margin: "auto",
        position: "relative"
      }}
      alt="404 Page not found!"
    />
    <center
      style={{
        paddingBottom: 30
      }}
    >
      <MDBBtn outline color="info" className="btn btn-outline-purple">
        <Link to="/">Return to Home Page</Link> <MDBIcon icon="home" />
      </MDBBtn>
    </center>
  </div>
);
export default NotFound;
