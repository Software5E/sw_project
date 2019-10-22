import React from 'react';
//import { Link } from 'react-router-dom';
//import './Footer.css';
import { MDBContainer } from "mdbreact";
import { Navbar } from 'react-bootstrap';

const Footer = () => {
    return (

        <Navbar bg="dark" expand="lg" fixed="bottom">
            <div class="container text-center">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href={'Home'}>FaceR.com </a>
                </MDBContainer>
            </div>
        </Navbar >

    )
};

export default Footer;
