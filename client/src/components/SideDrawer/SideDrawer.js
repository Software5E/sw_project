import React from 'react';
import './SideDrawer.css'

/* optional side drawer component, can be used to navigate pager - currently not in use */

const SideDrawer = props => {
    let drawerClasses = 'SideDrawer';
    if (props.show) {
        drawerClasses = 'SideDrawer open';
    }
    return (
        <nav className={drawerClasses} >
            <ul>
                <li>
                    <a href="/about">About Us</a></li>
                <li>
                    <a href="/newsletter">Newsletter</a></li>
            </ul>
        </nav>

    );
};
export default SideDrawer;

