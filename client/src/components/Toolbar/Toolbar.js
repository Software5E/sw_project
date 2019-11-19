import React from 'react';
import '../SideDrawer/DrawerToggleButton';
//import './Toolbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const toolbar = props => (
    <Navbar fixed='top' bg="light" expand="lg">
        <Navbar.Brand href={'Home'}>  <img
            alt=""
            src="/FaceR.png"
            width="150"
            height="30"
            className="d-inline-block align-top"
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href={'About'}>About Us</Nav.Link>
                <Nav.Link href='https://docs.google.com/forms/d/e/1FAIpQLSeaNf_uq-q5ii_GKxr2koeOfC7UOHoNoob-XRG_6O53iip36Q/viewform'>Newsletter</Nav.Link>
                <NavDropdown title="Contact Us" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Email</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Amazon Webstore</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar >
);

export default toolbar;