import React from 'react';
import './DrawerToggleButton.css';
/* Button to show toolbar */
const drawerToggleButton = props => (
    <button className="toggle-button" onmouseover={props.click} onClick={props.click}>
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
    </button>
);

export default drawerToggleButton;