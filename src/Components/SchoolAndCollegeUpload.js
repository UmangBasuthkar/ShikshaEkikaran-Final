import React from "react";
import './SchoolAndCollegeUpload.css';

export const SchoolAndCollegeUpload = () => {
    return (
        <>
            <br/><br/><br/>
            <div align="right" style={{"margin-right":"25px"}}>
                <h3>Welcome, [School/College name] &nbsp;&nbsp;<i className="bi bi-person-circle"></i></h3>
            </div>
            <hr/>
            <h3 className = "h31">Upload Files</h3><br/>
            <div>
            
                <p className = "p1">
                    <label>
                        <img src="Ulogo.png"/><br/>
                        Browse files
                        <input type="file" id="upload" hidden/>
                    </label>
                </p>
                <label className="h31"><b>Description:</b></label><br/>
                <input type = "text" style = {{ "marginLeft":"30%" }}/><br/><br/>
                <div style = {{"margin-left":"60%"}}>
                    <button type="submit" style={{"background-color":"red"}}>Cancel</button>&nbsp;&nbsp;
                    <button type="submit">Upload</button>
                </div>
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