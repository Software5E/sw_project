import React from "react";
//import { Link } from 'react-router-dom';
import "./Footer.css";
import { MDBContainer } from "mdbreact";
import { Navbar } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <Navbar bg="dark" expand="lg" fixed="bottom" className="foot">
      <div className="container text-center">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href={"Home"}>FaceR.com </a>
        </MDBContainer>
      </div>
      <div className="footer-copyright text-right" id="socials">
        <div className="text-center">
          <MDBContainer fluid className={"SocialContainer"}>
            <SocialIcon className="social" url="http://twitter.com/facer" />
            <SocialIcon className="social" url="http://youtube.com/facer" />
            <SocialIcon className="social" url="http://instagram.com/facer" />
            <SocialIcon
              className="social"
              url="https://www.kickstarter.com/facer"
            />
          </MDBContainer>
        </div>
      </div>
    </Navbar>
  );
};

export default Footer;
