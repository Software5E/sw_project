import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import './SignUp.css';
// simplify code, add style
// move button to center
const FormPage = () => {
    return (
        <div className="formPage">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard className="card">
                            <body>
                                    <p className="h4 text-center py-4">Subscribe to our Newsletter!</p>
                                    <div className="form-row">
                                        <div class="col">
                                    <label
                                        className="grey-text font-weight-bold"
                                    >
                                        Your Name:
                </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                    <br />
                                    </div>
                                    <div className="col">
                                    <label
                                        className="grey-text font-weight-bold"
                                    >
                                        Your Email:
                </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                    />
                                    </div>
                                    </div>
                                        <MDBBtn className="btn btn-outline-purple" type="submit" size="lg">
                                        Submit
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                                        </MDBBtn>
                                </body>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default FormPage;