import React from "react";
//import { Link } from 'react-router-dom';
import "./Footer.css";
import { MDBContainer } from "mdbreact";
import { Navbar } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

/* Navigation Bar - uses material design styling classes - and react social icons - link targets need
  to be updated to reflerct clients actual Social Links
*/
const Footer = () => {
  return (
    <Navbar bg="dark" expand="lg" className="foot">
      <div className="text-left">
        <MDBContainer fluid className={"SocialContainer"}>
          <i className="social" class="fas fa-toolbox fa-2x"></i>{" "}
          <Link class="text-warning" to="/Admin">
            Admin
          </Link>
        </MDBContainer>
      </div>

      <div className="container text-center">
        <MDBContainer fluid style={{ color: "white" }}>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a style={{ color: "white" }} href={"Home"}>FaceR.com </a>
        </MDBContainer>
      </div>
      <div className="footer-copyright text-right" id="socials">
        <div className="text-center">
          <MDBContainer fluid className={"SocialContainer"}>
            <SocialIcon
              className="social"
              url="http://twitter.com/facer"
              target="_blank"
            />
            <SocialIcon
              className="social"
              url="http://youtube.com/facer"
              target="_blank"
            />
            <SocialIcon
              className="social"
              url="http://instagram.com/facer"
              target="_blank"
            />
            <SocialIcon
              className="social"
              url="https://www.kickstarter.com/facer"
              target="_blank"
            />
          </MDBContainer>
        </div>
      </div>
    </Navbar>
  );
};

export default Footer;
