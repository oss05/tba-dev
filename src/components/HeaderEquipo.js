import React from 'react';

const HeaderEquipo = props => {
    return (
        <div className="headerEquipo" style={{ width: "80%" }}>
            <h2>
                {props.data.areas.equipo.nombreCompleto} <br />
                <p style={{ display: props.rolDisp }}>{props.rol}</p>
            </h2>

            <section style={{ display: props.displayPhoto }}>
                <div className="d-flex flex-column flex-md-row justify-content-around align-items-center" >
                    <img src={props.img} alt={props.alt} style={{ width: "200px", objectFit: "cover", display: props.display }} />
                    <h3 className="abogado mt-4 ml-md-4">
                        <p style={{ fontSize: "22px" }}>{props.nombreEquipo}</p>
                        <a href={props.linkCorreo}>{props.correoEquipo}</a>
                    </h3>
                </div>
            </section>
        </div>
    )
}

export default HeaderEquipo;