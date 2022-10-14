import heroimg from '../image/banner-right-image.png';
import { motion } from "framer-motion"

const Hero = () =>{

    

return(
<>
    <section className="hero-section" id="home">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="hero-content">
                        <h6 className="hero-sub">Welcome To Our School</h6>
                        <div className="hero-title">
                            <h1 className="hero-head">
                                Best Place To Learn Graphic <span className="heading-color">Design!</span>
                            </h1>
                        </div>
                        <div className="hero-btn mt-5">
                            <a href="" className="btn">Join Us Now!</a>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-6 mt-lg-0 mt-5">
                    <div className="right-img">
                        <img src={heroimg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Hero;