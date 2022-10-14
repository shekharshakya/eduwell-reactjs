import React from 'react'

const CounterBox = (props) => {
return (
<>
    <div className="counter-box">
        <div className="number counter">
            {props.count}
        </div>
        <h4>{props.client}</h4>
    </div>
</>
)
}

export default CounterBox