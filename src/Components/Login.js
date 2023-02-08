import React from "react";
import './LoginStyle.css'
export const Login = () => {
    return (
        <>
        <div id = "login">
            <br/><br/><br/>
            <form>
                <div className="container">
                    <h1>Sign Up</h1><br/>

                    <i className = "fa fa-envelope icon"></i>
                    <label for="uname"><b>Username</b></label>
                    <input type="text" className="input" placeholder="Enter your username" name="uname" required/>

                    <i className = "fa fa-lock icon"></i>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" className="input" placeholder="Enter your password" name="psw" required/>
                    
                    <div style = {{"text-align": "right"}}><a href="#">Forgot Password?</a></div>
                    <button type="submit" className="button1">Login</button>
                    <center><a href="SignUpAs">Don't have an account? Sign up</a></center>
                </div>
            </form>
            <br/><br/><br/>
            <div id = "ContactUs" className = "footer">
                Contact
                <br/>
                Phone number: +917981961819
                <br/>
                Email: umangbasuthkar5@gmail.com
            </div>
        </div>
        </>
    )
}