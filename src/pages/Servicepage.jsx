import Slider from "react-slick";
import Contact from "../component/Contact";
import Simplecta from "../component/Simplecta";
import serviceiconone from "../image/service-icon-01.png";
import serviceicontwo from "../image/service-icon-02.png";
import serviceiconthree from "../image/service-icon-03.png";
import serviceiconfour from "../image/service-icon-04.png";
import featureimg from "../image/featured-product.jpg";
import Beststratgy from "../component/Beststratgy";
import Header from "../component/Header";

const Servicepage = () =>{
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
return(
<>
<Header/>
    <section class="page-heading">
        <div class="section">
            <div class="container">
                <div class="page-head">
                    <h5 class="section-small">What We Do</h5>
                    <h1 class="hero-head text-center w-100">Our Services</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="service">
        <div class="section pt-2 ">
            <div class="container">
                <h5 class="section-small">OUR SERVICES</h5>
                <h3 class="section-head">Provided <span class="heading-color">Services</span></h3>
                <Slider {...settings}>
                    <div>
                        <div className="service-item">
                            <img src={serviceiconone} alt="" />
                            <h4 className="service-head">Ready Target</h4>
                            <p>Please tell your friends about the best CSS template website that is TemplateMo.</p>
                        </div>
                    </div>
                    <div>
                        <div className="service-item">
                            <img src={serviceicontwo} alt="" />
                            <h4 className="service-head">Ready Target</h4>
                            <p>Please tell your friends about the best CSS template website that is TemplateMo.</p>
                        </div>
                    </div>
                    <div>
                        <div className="service-item">
                            <img src={serviceiconthree} alt="" />
                            <h4 className="service-head">Ready Target</h4>
                            <p>Please tell your friends about the best CSS template website that is TemplateMo.</p>
                        </div>
                    </div>
                    <div>
                        <div className="service-item">
                            <img src={serviceiconfour} alt="" />
                            <h4 className="service-head">Ready Target</h4>
                            <p>Please tell your friends about the best CSS template website that is TemplateMo.</p>
                        </div>
                    </div>
                    <div>
                        <div className="service-item">
                            <img src={serviceiconfour} alt="" />
                            <h4 className="service-head">Ready Target</h4>
                            <p>Please tell your friends about the best CSS template website that is TemplateMo.</p>
                        </div>
                    </div>
                    <div>
                        <div className="service-item">
                            <img src={serviceiconfour} alt="" />
                            <h4 className="service-head">Ready Target</h4>
                            <p>Please tell your friends about the best CSS template website that is TemplateMo.</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </section>

    <Simplecta/>

    <section class="feature">
        <div class="section">
            <div class="container">
                <h5 class="section-small">FEATURED SERVICE</h5>
                <h3 class="section-head">Best Of Our <span class="heading-color">Product</span></h3>
                <div class="row extra">
                    <div class="col-lg-3 p-lg-0">
                        <div class="feature-list">
                           <Beststratgy img ={serviceiconone} head={"Best Strategy"} text={"Food &amp truck tumeric taxidermy hoodie chiasore bitters retroed gentrifystreet portland."}/>
                           <Beststratgy img ={serviceicontwo} head={"Best Strategy"} text={"Food &amp truck tumeric taxidermy hoodie chiasore bitters retroed gentrifystreet portland."}/>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="mid-img text-center">
                            <img src={featureimg} alt=""/>
                        </div>
                    </div>
                    <div class="col-lg-3 p-lg-0">
                        <div class="feature-list">
                        <Beststratgy img ={serviceiconthree} head={"Best Strategy"} text={"Food &amp truck tumeric taxidermy hoodie chiasore bitters retroed gentrifystreet portland."}/>
                           <Beststratgy img ={serviceiconfour} head={"Best Strategy"} text={"Food &amp truck tumeric taxidermy hoodie chiasore bitters retroed gentrifystreet portland."}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Contact/>

</>
)

}
export default Servicepage;