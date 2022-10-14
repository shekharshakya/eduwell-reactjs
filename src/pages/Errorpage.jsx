import React from 'react'
import { Link } from 'react-router-dom';
import error from '../image/error.webp'


const Errorpage = () => {
  return (
    <>
   <section className="404-error">
        <div className="container">
            <div className="error-cover">
                <div className="c text-center">
                    <img src={error} className="w-100" alt="" />
                    <Link to="/" className="btn">Back to Home</Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Errorpage