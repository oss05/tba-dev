import React from 'react';

const Badge = props => {
    return(
        <div>
            <h2 className="tituloBadge">{props.badgeName}</h2>
            <p>{props.parrafoUno}</p>
            <p>{props.parrafoDos}</p>
            <p>{props.parrafoTres}</p>
            <p>{props.parrafoCuatro}</p>
            <p>{props.parrafoCinco}</p>
            <p>{props.parrafoSeis}</p>
        </div>
    )
}

export default Badge;