import React from 'react';
import '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
    // <header className="toolbar">
    //     <nav className="toolbar__navigation">
    //         <div className="toolbar_toggle-button">
    //             <DrawerToggleButton click={props.drawerClickHandler} />
    //         </div>
    //         <div className="toolbar__logo"><a href="home"><img className="ico" src="/FaceR.png" width="150" height="30" href="/" /></a></div>
    //         <div className="spacer" />
    //         <div className="toolbar_navigation-items">
    //             <ul>
    //                 <li>
    //                     <a href="/about">About Us</a>
    //                 </li>
    //                 <li>
    //                     <a href="/newsletter">NewsLetter</a>
    //                 </li>
    //             </ul>
    //         </div>
    //     </nav>
    // </header >
    // <Navbar bg="light" variant="light">
    //     <Navbar.Brand href="#home">
    // <img
    //     alt=""
    //     src="/FaceR.png"
    //     width="150"
    //     height="30"
    //     className="d-inline-block align-top"
    // />
    //         {' About '}
    //         {' Newsletter '}
    //     </Navbar.Brand>
    // </Navbar>
    <Navbar sticky="top" bg="light" variant="light">
        <Navbar.Brand href={'Home'}><img
            alt=""
            src="/FaceR.png"
            width="150"
            height="30"
            className="d-inline-block align-top"
        /></Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href={' About '}>About Us</Nav.Link>
            <Nav.Link href={' Newsletter '}>Newsletter</Nav.Link>
        </Nav>
    </Navbar>
);

export default toolbar;