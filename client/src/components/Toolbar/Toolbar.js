import React from 'react';
import '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="home"><img className="ico" src="/FaceR.png" width="150" height="30" href="/" /></a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/newsletter">NewsLetter</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header >
);

export default toolbar;