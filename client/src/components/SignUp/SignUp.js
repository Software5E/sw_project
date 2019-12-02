import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import './SignUp.css';
const FormPage = () => {
    return (
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <div className="formPage">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <form>
                                    <p className="h4 text-center py-4">Subscribe</p>
                                    <label
                                        htmlFor="defaultFormCardNameEx"
                                        className="grey-text font-weight-light"
                                    >
                                        Your name
                </label>
                                    <input
                                        type="text"
                                        id="defaultFormCardNameEx"
                                        className="form-control"
                                    />
                                    <br />
                                    <label
                                        htmlFor="defaultFormCardEmailEx"
                                        className="grey-text font-weight-light"
                                    >
                                        Your email
                </label>
                                    <input
                                        type="email"
                                        id="defaultFormCardEmailEx"
                                        className="form-control"
                                    />
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn className="btn btn-outline-purple" type="submit">
                                            Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                                        </MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
=======
=======
>>>>>>> Stashed changes
      
              <MDBCard className="mx-auto">
                <MDBCardBody>
                  <form onSubmit={this.onSubmit}>
                    <p className="h4 text-center py-4">Subscribe</p>
                    <label
                      htmlFor="defaultFormCardNameEx"
                      className="grey-text font-weight-light"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="defaultFormCardNameEx"
                      className="form-control"
                      name="name"
                    />
                    <br />
                    <label
                      htmlFor="defaultFormCardEmailEx"
                      className="grey-text font-weight-light"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="defaultFormCardEmailEx"
                      className="form-control"
                      name="email"
                    />
                    <div className="text-center py-4 mt-3">
                      <MDBBtn
                        className="btn btn-outline-purple"
                        type="submit"
                        onClick={this.handleSubmit}
                      >
                        Send
                        <MDBIcon far icon="paper-plane" className="ml-2" />
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    );
};

export default FormPage;