import React from 'react';

const Badge = props => {
    return(
        <div>
            <h2>{props.badgeName}</h2>
            <p>{props.parrafoUno}</p>
            <p>{props.parrafoDos}</p>
            <p>{props.parrafoTres}</p>
            <p>{props.parrafoCuatro}</p>
            <p>{props.parrafoCinco}</p>
        </div>
    )
}

export default Badge;