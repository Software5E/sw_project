import React from 'react';
//import { Link } from 'react-router-dom';
//import './Footer.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { Navbar } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';




const Footer = () => {
    return (

        <Navbar bg="dark" expand="lg" fixed="bottom">
            <div class="container text-center">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href={'Home'}>FaceR.com </a>
                </MDBContainer>
            </div>
            <div className="footer-copyright text-right ">
                <MDBContainer fluid>
                    <SocialIcon url="http://twitter.com/facer" />
                    <SocialIcon url="http://youtube.com/facer" />
                    <SocialIcon url="http://instagram.com/facer" />
                    <SocialIcon url="https://www.kickstarter.com/facer" />
                </MDBContainer>
            </div>
        </Navbar >

    )
};

export default Footer;
