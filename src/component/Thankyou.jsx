import React from 'react'
import { Link } from 'react-router-dom';
import thankyou from "../image/thankyou.png"


const Thankyou = () => {
return (
<>
    <section className="thankyou">
        <div className="container">
            <div className="thank-you-cover">
                <div className="thank-img text-center">
                    <img src={thankyou} alt="" />
                    <p>for contacting us, we will get in touch with you soon...</p>
                    <Link to="/" className="btn">Back to Home</Link>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Thankyou;