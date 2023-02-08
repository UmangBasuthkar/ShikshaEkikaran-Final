import React from "react";
import './SchoolAndCollegeview.css'

export const SchoolAndCollegeview = () => {
    return (
        <>
            <br/>
            <div align="right" style={{"margin-right": "25px", "marginTop":"5%"}}>
                <h3>Welcome, [School/College name] &nbsp;&nbsp;<i className="bi bi-person-circle"></i></h3>
            </div>
            <hr/>
            <h3 style = {{"margin-left":"25px"}}> Files Uploaded:</h3><br/>
            <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">File Name</th>
                <th scope="col">Description</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Shiksha Ekikaran</td>
                <td>A powerpoint document containing my progress</td>
                <td>
                    <a href="Shiksha_Ekikaran.pptx">
                        <i className="bi-file-earmark-arrow-down-fill i"></i>
                    </a>
                </td>
                </tr>
                <tr>
                <td>Logo</td>
                <td>My website Logo</td>
                <td>
                    <a href="Logo.png">
                        <i className="bi-file-earmark-arrow-down-fill i"></i>
                    </a>
                </td>
                </tr>
                <tr>
                <td>Random</td>
                <td>A random csv file</td>
                <td>
                    <a href="insurance.csv">
                        <i className="bi-file-earmark-arrow-down-fill i"></i>
                    </a>
                </td>
                </tr>
            </tbody>
            </table>
            <a href = "SchoolAndCollegeUpload">
                <button type = "upload"  className="button">Upload</button>
            </a>
            <br/><br/><br/><br/><br/>
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