import React, { useState } from "react";
import Slider from "react-slick";
import SliderApi from "../api/SliderApi";


const Service = ()=>{
  
const [sliderdata,  setsliderdata] = useState(SliderApi);

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

return (
<>
    <section className="service" name="service" id="services">
        <div className="section">
            <div className="container">
                <h5 className="section-small">OUR SERVICES</h5>
                <h3 className="section-head">Provided <span className="heading-color">Services</span></h3>
                <Slider {...settings}>
                 {
                    sliderdata.map((slideinfo,index)=>{
                        return(
                            <>
                    <div>
                        <div className="service-item" key={index}>
                            <img src={slideinfo.imgscr} alt="" />
                            <h4 className="service-head">{slideinfo.sliderheading}</h4>
                            <p>{slideinfo.slidertext}</p>
                        </div>
                    </div>
                            </>
                        )
                    })
                 }
                </Slider>
            </div>
        </div>
    </section>
</>
)
}
export default Service;