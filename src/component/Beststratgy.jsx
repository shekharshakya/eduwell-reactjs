import React from 'react'



function Beststratgy(props) {
return (
<>
    <div className="box-info">
        <div className="icon">
            <img src={props.img} alt="" />
        </div>
        <h4>{props.head}</h4>
        <p>{props.text}</p>
    </div>
</>
)
}

export default Beststratgy