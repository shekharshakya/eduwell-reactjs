import React from 'react'
import { useState } from 'react';


function Scrolltop() {

    const [visible, setVisible] = useState(false);
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true);
      } 
      else if (scrolled <= 300){
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);

return (
<>
    <div className='scroll-top' style={{display: visible ? 'inline' : 'none'}} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <i class="fa-solid fa-circle-arrow-up"></i>
    </div>
</>

)
}

export default Scrolltop