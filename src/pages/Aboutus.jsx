import Simplecta from "../component/Simplecta";
import Header from "../component/Header";
import aboutleftimg from "../image/about-left-image.png";
import serviceiconone from "../image/service-icon-01.png";
import serviceicontwo from "../image/service-icon-02.png";
import teammemberthumbone from "../image/team-member-thumb-01.jpg";
import teammemberthumbtwo from "../image/team-member-thumb-02.jpg";
import teammemberthumbthree from "../image/team-member-thumb-03.jpg";
import teammemberthumbfour from "../image/team-member-thumb-04.jpg";
import Testimonial from "../component/Testimonial";
import videoimg from "../image/video-thumb.jpg"
import { useState } from "react";
import Beststratgy from "../component/Beststratgy";
import TeamApi from "../api/TeamApi";

const Aboutus =()=>{

const [toggle , settoggle] = useState(1)
const[ourteam, setourteam] = useState(TeamApi);


const tabhanbler = (index)=>{
settoggle(index)
}
return (
<>
    <Header />
    <section className="page-heading">
        <div className="section">
            <div className="container">
                <div className="page-head">
                    <h5 className="section-small">OUR COURSES</h5>
                    <h1 className="hero-head text-center w-100">About Us</h1>
                </div>
            </div>
        </div>
    </section>


    <section className="about-section">
        <div className="section  pt-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={aboutleftimg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-5">
                        <div className="about-text">
                            <h5 className=" text-start section-small">GET INFO</h5>
                            <h3 className=" text-start section-head mb-4">Read More <span
                                    className="heading-color">About
                                    Us</span></h3>
                            <p>You are allowed 100% to download and use our templates from TemplateMo for your
                                commercial or business websites. You are not allowed to redistribute this template ZIP
                                file on any other website without a permission from us.</p>
                            <p>There are some unethical people on this planet earth who copied our templates so easily
                                without any permission from us and then reposted on their websites. Their Karma will hit
                                them really hard. Yeah, that is right.</p>
                            <div className="row extra">
                                <div className="col-md-6 mb-md-0 mb-5">
                                    <Beststratgy img={serviceiconone} head={"Best Strategy"} text={"Food &amp truck tumeric taxidermy hoodie chiasore bitters retroed gentrifystreet portland."} />
                                </div>
                                <div className="col-md-6">
                                    <Beststratgy img={serviceicontwo} head={"Creative Ideas"} text={"Food &amp truck tumeric taxidermy hoodie chiasore bitters retroed gentrifystreet portland."} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="our-team">
        <div className="section">
            <div className="container">
                <h5 className="section-small">OUR TEAM</h5>
                <h3 className="section-head">Our Team <span className="heading-color">Members</span></h3>
                <div className="team-list extra">
                    <div className="team  text-center" onClick={()=>{tabhanbler(1)}} tab-id="tab-1">
                        <img src={teammemberthumbone} alt="" srcset="" />
                        <h4>Ruby Foster</h4>
                        <span className="heading-color">CEO-FOUNDER</span>
                    </div>
                    <div className="team  text-center" onClick={()=>{tabhanbler(2)}} tab-id="tab-2">
                        <img src={teammemberthumbtwo} alt="" srcset="" />
                        <h4>Luis Oconnell</h4>
                        <span className="heading-color">CEO-FOUNDER</span>
                    </div>
                    <div className="team  text-center" onClick={()=>{tabhanbler(3)}} tab-id="tab-3">
                        <img src={teammemberthumbthree} alt="" srcset="" />
                        <h4>Jackie Riggs</h4>
                        <span className="heading-color">CEO-FOUNDER</span>
                    </div>
                    <div className="team  text-center" onClick={()=>{tabhanbler(4)}} tab-id="tab-4">
                        <img src={teammemberthumbfour} alt="" srcset="" />
                        <h4>Alfred Small</h4>
                        <span className="heading-color">CEO-FOUNDER</span>
                    </div>
                </div>
                <div className="row extra">
                    <div className="col-lg-9 mx-auto">
                        {
                        ourteam.map((team)=>{
                        return(
                        <>
                            <div className={toggle===team.id ? "tab-content active animate__zoomIn animate__animated"
                                : "tab-content" } content-tab="tab-1">
                                <div className="tab-info">
                                    <h4>{team.coursename}</h4>
                                    <p>{team.coursedetails}</p>
                                    <p>{team.coursedetailstwo}</p>
                                    <div className="text-center">
                                        <span>{team.coursetime}</span>
                                        <span>{team.courseweek}</span>
                                        <span className="last-span">{team.courseweek}</span>
                                    </div>
                                </div>
                                <div className="tab-img">
                                    <img src={team.imgscr} alt="" />
                                </div>
                            </div>
                        </>
                        )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Simplecta />
    <Testimonial />

    <section className="contact">
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="cover">
                            <h5 className="section-small text-start">OUR OFFICE</h5>
                            <h3 className="section-head text-start">Get Closer To<span className="heading-color">
                                    EduWell</span>
                            </h3>
                            <p className="des text-start w-100 p-0 mb-4">Trust fund nocore broklyn humblebrag mustache
                                pork
                                kitsch, bicycle rights hexagon schlitz keytar palo is santo drinking vinegar fam ramps.
                            </p>
                            <p className="des text-start w-100 p-0 mb-4">Four dollar toast and edison bulb vinyl,
                                listicle
                                hashtag pug scenester typewrit er yuccie street artboard or whatever to fill place.</p>
                            <ul className="about-list p-0">
                                <li>- Selfies you probably haven't heard of them.</li>
                                <li>- Tousled cold-pressed chicharrones yuccie.</li>
                                <li>- Pabst iPhone chartreuse shabby chic tumeric.</li>
                                <li>- Scenester normcore mumblecore snackwave.</li>
                            </ul>
                            <div className=" mt-5">
                                <a href="" className="btn">Join Us Now!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="video">
                            <div className="thumb">
                                <img src={videoimg} alt="" />
                            </div>
                            <div className="play-button">
                                <a href="youtube.com/watch?v=-QgJgZCJvo4" className="popup-youtube iframe"
                                    target="_blank"><i className="fa fa-play"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <ul className="social-icons">
                            <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com/i/flow/login"><i className="fa-brands fa-twitter"></i></a>
                            </li>
                            <li><a href="https://www.linkedin.com/login"><i
                                        className="fa-brands fa-linkedin-in"></i></a>
                            </li>
                            <li><a href="#"><i className="fa fa-rss"></i></a></li>
                            <li><a href="#"><i className="fa-solid fa-globe"></i></a></li>
                        </ul>
                        <div className="copyright">
                            <p className="mb-0">Copyright © 2022 EduWell Co., Ltd. All Rights Reserved.</p>
                            <p className="mb-0">Design: <strong>Shaky_War</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</>
)
}
export default Aboutus;