import simplecta from "../image/cta-left-image.png"

const Simplecta = ()=>{
    return(
        <>
        <section className="simple-cta">
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-img text-lg-end text-center">
                            <img src={simplecta} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-content">
                            <h6 className="hero-sub">Get the sale right now!</h6>
                            <h1 className="hero-head">
                                Up to 50% OFF For 1+
                                <br/> courses
                            </h1>
                            <p>Kogi VHS freegan bicycle rights try-hard green juice probably haven't heard of them
                                cliche la croix af chillwave.</p>
                            <div className="cta-btn mt-5">
                                <a href="" className="btn">View Courses</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default Simplecta;