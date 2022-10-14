import React, { useState } from "react";
import logo from "../image/templatemo-eduwell.png"
import { Link } from 'react-router-dom';
import Phonemenu from "./Phonemenu";
// import { Link } from "react-scroll";

 const Header = () =>{


return (
  <>
    
    <header>
      <div className="top-header">
        <div className="container">
          <div className="menu">
            <img src={logo} alt="" className="logo"/>
            <nav>
              <ul>
              <li>
              <Link to="/">Home</Link>
                  </li>
                 {
                  /*
                   <li>
                    <Link to="/#services" spy={true} smooth={true} duration={500}>Service</Link>
                  </li>
                  <li>
                    <Link to="/">Courses</Link>
                  </li>
                  */
                 }
                  <li>
                  <Link to="/aboutuspage">About Us</Link>
                  </li>
                  <li>  <Link to="/servicepage">Our Services</Link></li>
                  <li> <Link to="/contactpage">Contact Us</Link></li>
                {/* <li className="dropdown-me">
                  <Link to="javascript:void(0)">Pages</Link>
                  <ul className="sub-menu">
                      <li>
                        <Link to="/aboutuspage">About Us</Link>
                      </li>
                      <li>
                        <Link to="/servicepage">Our Services</Link>
                      </li>
                      <li>
                        <Link to="/contactpage">Contact Us</Link>
                      </li>
                  </ul>
                </li> */}
              </ul>
              <div className="open-menu" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa-solid fa-bars"></i>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>


  </>
);

 }

export default Header;