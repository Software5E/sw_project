import React from 'react';
import './AdminLogin.css'

class AdminLogin extends React.Component {
    constructor(props){
        super(props)
        this.state={}
        this.handleChange = this.handleChange.bind(this);
    }

    submitLogin() {
        const pass = "password"
        const name = "admin"
        console.log(this.state.username, this.state.password)
        if ((this.state.username == name) && (this.state.password == pass)){
            //route to newsletter list
            console.log("The name and pass were correct.")
        }else {
            //say password is not correct
            console.log("The name and pass were NOT correct.")
            console.log(this.state.username, this.state.password, name, pass)
        }
    }

    handleChange({ target }) {
        this.setState({
          [target.name]: target.value
        });
 
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
                                <input type="text" name="username" className="login-input" placeholder="Username" onChange={this.handleChange}/>
                            </div>
                            <div className="input-group">
                                <label className="login-label" htmlFor="password">Password</label>
                                <input type="password" name="password" className="login-input" placeholder="Password" onChange={this.handleChange}/>
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