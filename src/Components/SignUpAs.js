import React from "react";
import './SignUpAsStyle.css'
export const SignUpAs = () => {
    return (
        <>
        <div>
            <br/><br/><br/>
            <div style={{"padding-top": "30px"}}>
                <h3 className = "h3">Sign Up As:<br/></h3><br/>
                <a href = "SchoolSignUp" style = {{"textDecoration":"none", "color":"white"}}><button type="button" className = "button2">School</button></a><br/><br/>
                <a href = "CollegeSignUp" style = {{"textDecoration":"none", "color":"white"}}><button type="button" className = "button2">College</button></a><br/><br/>
                <a href = "GovernmentSignUp" style = {{"textDecoration":"none", "color":"white"}}><button type="button" className = "button2">Government Official</button></a>
            </div>
            <br/><br/><br/><br/><br/><br/><br/>
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