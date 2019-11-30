import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import './SignUp.css';
import axios from 'axios';
export default class FormPage extends React.Component {
	constructor() {
		super();
		this.state = {
            name: '',
            email: ''
         };
        // this.onSubmit = this.onSubmit.bind(this);
    }
    
    /*onSubmit(e)
    {
        e.preventDefault();

        var username = e.target[0].value
        var useremail = e.target[1].value
        //console.log('name: ', e.target[0].value);
        //console.log('email: ', e.target[1].value);
        
        this.setState({ name: username, email: useremail }, () => {
            console.log('name: ', this.state.name);
            console.log('email: ', this.state.email);
          }); 

        const user = {
            name: this.state.name,
            email: this.state.email
        }

        axios.post('http://localhost:3000/signup', {
            name: user.name,
            email: user.email
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        });

    }
    */
    render() {
    return (
        <div className="formPage">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <form action="/signup" method="post" /*onSubmit={this.onSubmit}*/>
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
    );
    }
};

//export default FormPage;