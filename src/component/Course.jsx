import { useState } from "react";
import CourseApi from "../api/CourseApi";
import Accordion from "./Accordion";

const Course =()=>{
const [coursedata, setcoursedata] = useState(CourseApi);

    const [toggle, settoggle] = useState(1);

    const toggletab = (index) =>{
        settoggle(index);
    } 
return (
    <>
     <section className="course" id="course">
        <div className="section">
            <div className="container">
                <h5 className="section-small">OUR COURSES</h5>
                <h3 className="section-head">What You Can<span className="heading-color">Learn</span></h3>
                <p className="des">You just think about TemplateMo whenever you need free CSS templates for your business
                    website</p>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="vertical-tab">
                            <ul className="p-0 m-0">
                                <li tab-id="tab-1" onClick={()=>toggletab(1)} className={toggle === 1 ? "tab-list active" : "tab-list"}>Web Development</li>
                                <li tab-id="tab-2" onClick={()=>toggletab(2)} className={toggle === 2 ? "tab-list active" : "tab-list"}>Graphic Design</li>
                                <li tab-id="tab-3" onClick={()=>toggletab(3)} className={toggle === 3 ? "tab-list active" : "tab-list"}>Web Design</li>
                                <li tab-id="tab-4" onClick={()=>toggletab(4)} className={toggle === 4 ? "tab-list active" : "tab-list"}>WordPress</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 mx-auto">
                       {
                        coursedata.map((courseinfo)=>{
                            return(
                                <>
                                 <div className={toggle === courseinfo.id ? "tab-content active animate__zoomIn animate__animated" : "tab-content"}>
                            <div className="tab-img">
                                <img src={courseinfo.imgscr} alt=""/>
                                <div className="price">
                                    <h6 className="m-0">{courseinfo.courseprice}</h6>
                                </div>
                            </div>
                            <div className="tab-info">
                                <h4>{courseinfo.coursename}</h4>
                                <p>{courseinfo.coursedetails}</p>
                                <p>{courseinfo.coursedetailstwo}</p>
                                <div className="text-center">
                                    <span>{courseinfo.coursetime}</span>
                                    <span>{courseinfo.courseweek}</span>
                                    <span className="last-span">{courseinfo.coursecertificates}</span>
                                </div>
                            </div>
                        </div>


                                </>
                            )
                        })
                       }
                       
                    </div>
                </div>
                <Accordion/>
            </div>
        </div>
    </section>

    </>
)
}
export default Course;