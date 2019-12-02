import React from 'react';
//import { Link } from 'react-router-dom';
import './Footer.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { Navbar } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
<<<<<<< Updated upstream
    return (

        <Navbar bg="dark" expand="lg" fixed="bottom" className='foot'>
            <div className="container text-center">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href={'Home'}>FaceR.com </a>
                </MDBContainer>
            </div>
            <div className="footer-copyright text-right" id='socials' >
              <div className="text-center">
                <MDBContainer fluid className={"SocialContainer"} >
                    <SocialIcon className='social' url="http://twitter.com/facer" />
                    <SocialIcon className='social' url="http://youtube.com/facer" />
                    <SocialIcon className='social' url="http://instagram.com/facer" />
                    <SocialIcon className='social' url="https://www.kickstarter.com/facer" />
                </MDBContainer>
              </div>
            </div>
        </Navbar >

    )
=======
  return (
    <Navbar bg="dark" expand="lg"  className="foot">
     
      <div className="mr-auto" style={{color: "white"}}>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href={"Home"} style={{color: "white"}}>FaceR.com </a>
      </div>
      
      <div className="footer-copyright ml-auto" id="socials">
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
>>>>>>> Stashed changes
};

export default Footer;
