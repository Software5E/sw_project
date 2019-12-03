import React from 'react';
import '../../../src/bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import './ContactUs.css'




class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
                email: '',
                name: '',
                message: ''
            }
        }
    }
    handleSubmit = () => {
        axios({
            method: 'post',
            url: '/contactUs',
            data: {
                email: this.state.form.email,
                name: this.state.form.name,
                message: this.state.form.message
            }
        });
    };

    handleChange(event) {
        let fieldName = event.target.name;
        let fleldVal = event.target.value;
        this.setState({form: {...this.state.form, [fieldName]: fleldVal}});
        console.log(`${fieldName}: ${fleldVal}`)
    }

    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row justify-content-between">
                    <div className="col-12 col-md-10 col-lg-8 align-content-center mx-auto"
                         style={{marginTop: "7rem", marginBottom: "5rem"}}>
                        <div className="jumbotron">
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type='email' name="email" placeholder='Enter Email' onChange={(e) => this.handleChange(e)}/>
                                    <Form.Text className='text-warning' >
                                        We'll never share your personal information with anyone.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type='text' name="name" placeholder='Enter Name' onChange={(e) => this.handleChange(e)}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" name="message" rows="4" placeholder='Message' onChange={(e) => this.handleChange(e)}/>
                                </Form.Group>
                                <Button variant="light" type="submit" value="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    };
export default Contact;