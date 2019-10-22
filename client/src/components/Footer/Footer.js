import React from 'react';
import { Link } from 'react-router-dom';
//import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


var modal = document.getElementById('id01');

const Footer = () => {
    return (
        // <div>

        //     <footer className="footer">
        //         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        //         <div className="container">
        //             <div className="social">
        //                 {/* <span className="badge badge-pill badge-primary">Facebook</span>
        //                 <span className="badge badge-pill badge-secondary">Instagram</span>
        //                 <span className="badge badge-pill badge-success">Twitter</span>
        //                 <span className="badge badge-pill badge-danger">Kickstarter</span> */}
        //                 <a href="#" class="fa fa-facebook"></a>
        //                 <a href="#" class="fa fa-twitter"></a>
        //                 <a href="#" class="fa fa-reddit"></a>
        //                 <a href="#" class="fa fa-instagram"></a>
        //             </div>


        //         </div>

        //     </footer>
        // </div>
        // <div className="foot">
        //     <MDBFooter color="green" className="font-small pt-4 mt-4">
        //         <MDBContainer fluid className="text-center text-md-left">
        //             <MDBRow>
        //                 <MDBCol md="6">
        //                     <h5 className="title">Footer Content</h5>
        //                     <p>
        //                         Here you can use rows and columns here to organize your footer
        //                         content.
        //     </p>
        //                 </MDBCol>
        //                 <MDBCol md="6">
        //                     <h5 className="title">Links</h5>
        //                     <ul>
        //                         <li className="list-unstyled">
        //                             <a href="#!">Link 1</a>
        //                         </li>
        //                         <li className="list-unstyled">
        //                             <a href="#!">Link 2</a>
        //                         </li>
        //                     </ul>
        //                 </MDBCol>
        //             </MDBRow>
        //         </MDBContainer>
        //         <div className="footer-copyright text-center py-3">
        // <MDBContainer fluid>
        //     &copy; {new Date().getFullYear()} Copyright: <a href={'Home'}>FaceR.com </a>
        // </MDBContainer>
        //         </div>
        //     </MDBFooter >
        // </div>
        <footer sticky="bottom" id="footer" class="footer mt-auto py-3 bg-dark text-white-50">
            <div class="container text-center">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href={'Home'}>FaceR.com </a>
                </MDBContainer>
            </div>
        </footer>
    )
};

export default Footer;
