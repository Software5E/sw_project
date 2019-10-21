import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

var modal = document.getElementById('id01');

const Footer = () => {
    return (
        <div>

            <footer className="footer">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="container">
                    <div className="social">
                        {/* <span className="badge badge-pill badge-primary">Facebook</span>
                        <span className="badge badge-pill badge-secondary">Instagram</span>
                        <span className="badge badge-pill badge-success">Twitter</span>
                        <span className="badge badge-pill badge-danger">Kickstarter</span> */}
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-reddit"></a>
                        <a href="#" class="fa fa-instagram"></a>
                    </div>


                </div>

            </footer>
        </div>

    )
}

export default Footer;
