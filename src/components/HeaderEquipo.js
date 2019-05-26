import React from 'react';

const HeaderEquipo = props => {
    return (
        <div className="headerEquipo">
            <h2>
                {props.data.areas.equipo.nombreCompleto} <br />
                <p>{props.rol}</p> 
            </h2>
            <h3 className="abogado">
                <p>{props.nombreEquipo}</p> <br />
                <a href={props.linkCorreo}>{props.correoEquipo}</a>
            </h3>
        </div>
    )
}

export default HeaderEquipo;