import React from 'react';

const HeaderAreas = props => {
    return (
        <div>
            <h1>{props.data.areas.practica.nombreCompleto}</h1>
            <h2>{props.data.areas.practica.area.aduanas.nombre}</h2>
        </div>
    )
}

export default HeaderAreas;