import React from 'react';
import './AdminLogin.css'

class AdminLogin extends React.Component {
    constructor(props){
        super(props)
        this.state={pass: "p@ssw0rd", name: "admin"}
    }

    submitLogin(e) {
        console.log(this.uText)
        if (this.uText.username === this.state.name && this.pText.pass === this.state.pass){
            //route to newsletter list
        }else {
            //say password is not correct
        }
    }

    render (){

        return(
            <div className="root-container">
                <div className="box-container">
                    <div className="inner-container">
                        <div className="header">Admin Login</div>
                        <div className="box">
                            <div className="input-group">
                                <label className="login-label" htmlFor="username">Username</label>
                                <input type="text" name="username" className="login-input" placeholder="Username" ref={(username) => this.uText = username}/>
                            </div>
                            <div className="input-group">
                                <label className="login-label" htmlFor="password">Password</label>
                                <input type="password" name="password" className="login-input" placeholder="Password" ref={(pass) => this.pText = pass}/>
                            </div>
                            <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default AdminLogin;