import React from 'react';
import './BackDrop.css'
/* BackDrop component -> not in use curtrently */

const BackDrop = props => (
    <div className="backdrop" onClick={props.click}></div>
);

export default BackDrop;

