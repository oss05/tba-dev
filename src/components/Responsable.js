import React from 'react'

const Responsable = (props) => {
    return(
        <div className="responsable" style={{fontSize:"1.5em", fontWeight:"bold", marginLeft: "2em"}}>
            <p>{props.data.areas.practica.responsable} {props.responsable}</p>
        </div>
    )
}

export default Responsable;