import React from 'react';

const HeaderAreas = props => {
    return (
        <div className="headerAreas">
            <h1>{props.data.areas.practica.nombreCompleto}</h1>
            <h2 className="subtitle">{props.nombreArea}</h2>
        </div>
    )
}

export default HeaderAreas;