import React from "react";
import './CollegeSignUpStyle.css'

export const CollegeSignUp = () => {
    return (
        <>
        <br/><br/><br/>
        <h3 style={{"margin-left":"50px"}}>Fill the following details to Register your College</h3><br/>
        <p style={{"margin-left":"50px"}}>(Field with '*' is mandatory)</p>
        <br/>
        <form style={{"margin-left":"50px", "marginRight":"250px", "border":"none"}}>
            <label><b>Enter College Name*</b></label><br/>
            <input type="text" style={{"width":"100%"}} required/>
            <br/><br/>
            <label><b>Enter college Address(Full)*</b></label><br/>
            <input type="text" style={{"width":"100%"}} required/>
            <br/><br/>
            <label><b>Enter college Code*</b></label><br/>
            <input type="text" style={{"width":"100%"}} required/>
            <br/><br/>
            <label><b>Enter Board, affiliated to, Name*</b></label><br/>
            <input type="text" style={{"width":"100%"}} required/>
            <br/><br/>
            <label><b>Enter District*</b></label><br/>
            <input type="text" style={{"width":"100%"}} required/>
            <br/><br/>
            <label><b>Choose City*</b></label><br/>
            <select id = "city" style={{"width":"150px"}}>
                <option>Choose</option>
                <option>Hyderabad</option>
                <option>Bengaluru</option>
            </select>
            <br/><br/>
            <label><b>Choose State*</b></label><br/>
            <select id = "state" style={{"width":"150px"}}>
                <option>Choose</option>
                <option>Telangana</option>
                <option>Karnataka</option>
            </select>
            <br/><br/>
            <label><b>Enter Phone number*</b></label><br/>
            <input type="text" style={{"width":"100%"}} required/>
            <br/><br/>
            <label><b>Enter Email*</b></label><br/>
            <input type="text" style={{"width":"100%"}} required/>
            <br/><br/>
            <label><b>Enter Password*</b></label><br/>
            <input type="password" style={{"width":"100%"}} required/>
            <br/><br/>
        </form>
        <div style={{"margin-left":"50px"}}>
            <input type="checkbox" style={{"width":"25px"}}/> By Signing Up, I agree with the Terms of Use & Privacy Policy<br/><br/>
            <a href = "SchoolAndCollegeview">
                <button type="submit" className = "button">Sign Up</button>
            </a>
        </div>
        <br/><br/><br/><br/>
        <div id = "ContactUs" className = "footer">
            Contact
            <br/>
            Phone number: +917981961819
            <br/>
            Email: umangbasuthkar5@gmail.com
        </div>
        </>
    )
}