import React from "react";
export const Navbar = () => {
    return (
        <>
        <nav className="navbar fixed-top navbar-expand-sm bg-dark navbar-dark">
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    		<span className="navbar-toggler-icon"></span>
  		</button>
  		<div className="collapse navbar-collapse" id="collapsibleNavbar">
    		<ul className="navbar-nav">
      			<li className="nav-item">
        			<a className="nav-link text-white" href="/">Home</a>
      			</li>
      			<li className="nav-item">
        			<a className="nav-link text-white" href="Login">Login</a>
      			</li>
      			<li className="nav-item">
        			<a className="nav-link text-white" href="#ContactUs">Contact Us</a>
      			</li>
    		</ul>
  		</div>
  	</nav>
    </>
    )
}