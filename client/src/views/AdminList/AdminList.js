import React from 'react';
import './AdminList.css';

function AdminList() {
    return (
        <div className="root-container">
            <div className="head">
                <h1>Admin Console</h1>
                <p>View Newsletter and statistics</p>
            </div>
            <div className="row">
                <div className="left-collumn">
                    <div className="list">
                        <h4>Newsletter List</h4>
                        <p>List of Newsletter emails in an easy to view style</p>
                        <ul>
                            <li>Email1@gmail.com</li>
                            <li>Email2@hotmail.com</li>
                            <li>Email3@aol.com</li>
                        </ul>
                    </div>
                </div>
                <div className ="right-collumn">
                    <p>This is the right side.</p>
                </div>
            </div>
        </div>
        
    );
}

export default AdminList;
