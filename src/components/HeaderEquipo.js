import React from 'react';

const HeaderEquipo = props => {
    return (
        <div className="headerEquipo" style={{ width: "80%" }}>
            <h2>
                {props.data.areas.equipo.nombreCompleto} <br />
                <p style={{display: props.rolDisp}}>{props.rol}</p>
            </h2>

            <div className="d-flex flex-column flex-md-row justify-content-around">
                <img src={props.img} alt={props.alt} style={{ width: "200px", height: "200px", objectFit: "cover", display: props.display }} />
                <h3 className="abogado">
                    <p>{props.nombreEquipo}</p>
                    <a href={props.linkCorreo}>{props.correoEquipo}</a>
                </h3>
            </div>

        </div>
    )
}

export default HeaderEquipo;