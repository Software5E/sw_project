import React from "react";
import { MDBContainer, MDBBtn, MDBIcon } from "mdbreact";
import "./SignUp.css";
import axios from "axios";
import { Link } from "react-router-dom";
class FormPage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleSubmit = () => alert("Thank you for Subscribing!");

  onSubmit(e) {
    e.preventDefault();

    let user = {};
    user.name = e.target[0].value;
    user.email = e.target[1].value;

    console.log("username: ", user.name);
    console.log("useremail: ", user.email);

    axios
      .post("/signup", user)
      .then(res => {
        console.log(res);
        console.log("post to db succeeded!");
      })
      .catch(err => {
        console.log(err);
        console.log("post to db failed");
      });
    e.target.reset();
  }

  render() {
    return (
      <div className="formPage">
        <MDBContainer class="text-primary">
          <form
            class="text-primary text-center border border-light p-5"
            onSubmit={this.onSubmit}
          >
            <p class="h2 mb-4">Subscribe</p>

            <p>
              Join our mailing list. We will provide you with our product's
              update!
            </p>

            <p>
              <Link class="text-warning" to="/Newsletter">
                See the last newsletter
              </Link >
              <MDBIcon icon="clipboard-list" />
            </p>

            <input
              type="text"
              id="defaultSubscriptionFormPassword"
              class="form-control mb-4"
              placeholder="Name"
              name="name"
            />

            <input
              type="email"
              id="defaultSubscriptionFormEmail"
              class="form-control mb-4"
              placeholder="E-mail"
              name="email"
            />
            <div className="text-center py-4 mt-3">
              <MDBBtn
                outline
                color="info"
                className="btn btn-outline-purple"
                type="submit"
                onClick={this.handleSubmit}
              >
                Subscribe <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
          {/* <MDBRow>
            <MDBCol md="10" center>
              <MDBCard>
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
                        outline
                        color="info"
                        className="btn btn-outline-purple"
                        type="submit"
                        onClick={this.handleSubmit}
                      >
                        Subscribe{" "}
                        <MDBIcon far icon="paper-plane" className="ml-1" />
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow> */}
        </MDBContainer>
      </div>
    );
  }
}

export default FormPage;
