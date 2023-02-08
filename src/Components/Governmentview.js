import React from 'react';
import './Governmentviewstyle.css'

export const Governmentview = () => {
    return (
        <>
            <br/><br/><br/>
            <div align = "right" className = "div3">
                <h3>Welcome, [govt.official name] &nbsp;&nbsp;<i className="bi bi-person-circle"></i></h3>
            </div>
            <hr/>
            <div className = "div2">
                <form style = {{"border":"none"}}>
                    <label>Enter city:&emsp;</label>
                    <input type = "text" placeholder="Enter city" style = {{"width":"20%"}}/>
                    &emsp;
                    <label>Enter School/College name:&nbsp;</label>
                    <input type = "text" placeholder="Enter School/College name" style={{"width":"30%"}}/>&emsp;&emsp;
                    <a className="button8" data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvas">
                        <i className = "bi bi-funnel"></i>
                    </a>
                    &emsp;
                    <button type="submit" className="button8">Submit</button>
                    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="
                    offcanvas">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvas">Choose Filters</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="dropdown mt-3">
                            <form style = {{"border":"none"}}>
                                <select className = "select">
                                    <option>Choose Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                                <br/><br/><br/>
                                <select className = "select">
                                    <option>Choose Caste</option>
                                    <option value="SC/ST">SC/ST</option>
                                    <option value="EBC">EBC</option>
                                    <option value="OBC">OBC</option>
                                    <option value="OC">OC</option>
                                </select>
                                <br/><br/><br/>
                                Physically Disabled?<br/>
                                <select className = "select">
                                    <option>Choose</option>
                                    <option value="Yes">YES</option>
                                    <option value="No">NO</option>
                                </select>
                                <br/><br/><br/>
                                <select className = "select">
                                    <option>Choose Board</option>
                                    <option value="ssc">SSC</option>
                                    <option value="cbse">CBSE</option>
                                    <option value="icse">ICSE</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    </div>
                </form>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
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