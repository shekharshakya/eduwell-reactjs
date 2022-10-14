import React from 'react'
import Hero from "../component/Hero.jsx";
import Service from "../component/Service.jsx";
import Simplecta from "../component/Simplecta.jsx";
import Testimonial from "../component/Testimonial.jsx";
import Contact from '../component/Contact.jsx';
import Course from "../component/Course.jsx";
import Header from '../component/Header.jsx';


const Homepage = () => {
return (
<>
<Header />
 <Hero/>
 <Service/>
 <Course/>
 <Testimonial/>
 <Simplecta/>
 <Contact/> 
 {/* <Thankyou/> */}

</>
)
}

export default Homepage;