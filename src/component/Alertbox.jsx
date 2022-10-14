import React from 'react'

const Alertbox = (props) => {
return (
<div className="alertbox" style={{display : props.display ? 'inline' : 'none' }}>
    <div class="alert alert-danger" role="alert">
    Oops, something wasn't right
    </div>
</div>
)
}

export default Alertbox