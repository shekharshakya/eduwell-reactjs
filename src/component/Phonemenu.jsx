import React, { useState } from 'react'
import {Link} from "react-router-dom";



const Phonemenu = (showmenu) => {
    


  return (
 <>
  <div className="modal-menu">
        <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="phone-menu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="">Services</Link></li>
                                <li><Link to="">Courses</Link></li>
                                <li  className="dropdown-me">
                                    <Link to="javascript:void(0)">Pages</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/aboutuspage">About Us</Link></li>
                                        <li><Link to="/servicepage">Our Services</Link></li>
                                        <li><Link to="/contactpage">Contact Us</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="">Testimonials</Link></li>
                                <li><Link to="">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </>
  )
}

export default Phonemenu