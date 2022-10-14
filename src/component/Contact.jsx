
import Contactform from "./Contactform";



const Contact =()=>{
return (
    <>
     
     <section className="contact" id="contact">
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14017.26595832032!2d77.39146240000001!3d28.56025755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1653888313395!5m2!1sen!2sin"
                                width="100%" height="450" allowfullscreen="" loading="lazy" ></iframe>
                            <div className="contact-number">
                                <a href="tel:+090-080-0760">
                                    <div className="number">
                                        <i class="fa-solid fa-phone-flip"></i>
                                        <div className="info">
                                            <h4>MOBILE</h4>
                                            <span className="heading-color">090-080-0760</span>
                                        </div>
                                    </div>
                                </a>
                                <a href="tel:+090-080-0760">
                                    <div className="number">
                                        <i class="fa-solid fa-phone-flip"></i>
                                        <div class="info">
                                            <h4>MOBILE</h4>
                                            <span class="heading-color">090-080-0760</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="form">
                            <div className="form-cover">
                                <h5 className="section-small text-start">CONTACT US</h5>
                                <h3 className="section-head text-start">Say <span className="heading-color">Hello</span></h3>
                                <p className="des text-start w-100 p-0 mb-4">IF you need a working contact form by PHP
                                    script,
                                    please visit TemplateMo's contact page for more info.</p>
                                <Contactform/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul className="social-icons">
                            <li><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com/i/flow/login"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/login"><i class="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i class="fa fa-rss"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-globe"></i></a></li>
                        </ul>
                        <div className="copyright">
                            <p class="mb-0">Copyright © 2022 EduWell Co., Ltd. All Rights Reserved.</p>
                            <p class="mb-0">Design: <strong>Shaky_War</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
)
}
export default Contact;