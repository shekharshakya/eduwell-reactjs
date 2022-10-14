import Header from "../component/Header";
import Contact from "../component/Contact";
import CounterBox from "../component/CounterBox";

const Contactpage = () =>{

return(
<>
    <Header />

    <section className="page-heading">
        <div className="section">
            <div className="container">
                <div className="page-head">
                    <h5 className="section-small">Say Hello EduWell</h5>
                    <h1 className="hero-head text-center w-100">Contact Us</h1>
                </div>
            </div>
        </div>
    </section>

    <section className="contact-section">
        <div className="section  pt-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-text">
                            <h5 className=" text-start section-small">MORE INFO</h5>
                            <h3 className=" text-start section-head mb-4">Read More <span
                                    className="heading-color">About
                                    Us</span></h3>
                            <p>Trust fund nocore broklyn humblebrag mustache pork kitsch, bicycle rights hexagon schlitz
                                keytar palo is santo drinking vinegar fam ramps.</p>
                            <p>Four dollar toast and edison bulb vinyl, listicle hashtag pug scenester typewrit er
                                yuccie street artboard or whatever to fill place.</p>
                            <ul className="about-list p-0">
                                <li>- Selfies you probably haven't heard of them.</li>
                                <li>- Tousled cold-pressed chicharrones yuccie.</li>
                                <li>- Pabst iPhone chartreuse shabby chic tumeric.</li>
                                <li>- Scenester normcore mumblecore snackwave.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row extra">
                            <div className="col-md-6 mb-5">
                                <CounterBox count={125} client={"Finished Projects"} />
                            </div>
                            <div className="col-md-6 mb-5 mt-5 mt-md-0">
                                <CounterBox count={11} client={"Years Experience"} />
                            </div>
                            <div className="col-md-6 mt-5 mb-md-0 mb-5">
                                <CounterBox count={85} client={"Happy Clients"} />
                            </div>
                            <div className="col-md-6 mt-5">
                                <CounterBox count={85} client={"Awward Won"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Contact />

</>
)

}
export default Contactpage;