import Slider from "react-slick";
import quote from "../image/quote.png";
import TestimonialApi from "../api/TestimonialApi";
import { useState } from "react";

const Testimonial = () =>{
const [testimonialdata, settestimonialdata] = useState(TestimonialApi);

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
         <section className="testimonials" id="testimonial">
        <div className="section">
            <div className="container">
                <h5 className="section-small">TESTIMONIALS</h5>
                <h3 className="section-head">What They <span className="heading-color">Think</span></h3>
                <Slider {...settings} className="extra">
                  {
                    testimonialdata.map((testimonialinfo)=>{
                        return(
                            <>
                              <div>
                           <div className="testimonial-item" key={testimonialinfo.id}>
                            <p>{testimonialinfo.testimonialtext}</p>
                            <div className="info">
                                <div className="person-info">
                                    <h4>{testimonialinfo.personname}</h4>
                                    <span>{testimonialinfo.personprofile}</span>
                                </div>
                                <img src={quote} alt=""/>
                            </div>
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
export default Testimonial;