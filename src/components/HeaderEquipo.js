import React from 'react';

const HeaderEquipo = props => {
    return (
        <div className="headerAreas">
            <h1>{props.data.areas.equipo.nombreCompleto}</h1>
            <h2>{props.rol}</h2>
            <h3>{props.nombreEquipo}</h3>
            <h4>{props.correoEquipo}</h4>
        </div>
    )
}

export default HeaderEquipo;