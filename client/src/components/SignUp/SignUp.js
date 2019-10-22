import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div class="all">
            <div class="container register-form">
                <div class="form">
                    <div class="note">
                        <p>This is a simpleRegister Form made using Boostrap.</p>
                    </div>

                    <div class="form-content">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Name *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Phone Number *" value="" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Password *" value="" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Confirm Password *" value="" />
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btnSubmit">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignUp;
