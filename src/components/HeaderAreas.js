import React from 'react';

const HeaderAreas = props => {
    return (
        <div className="headerAreas">
            <h1 style={{borderBottom: props.borderBottom}}>{props.data.areas.practica.nombreCompleto}</h1>
            <h2 className="subtitle" style={{borderBottom: props.borderBottom2}}>{props.nombreArea}</h2>
        </div>
    )
}

export default HeaderAreas;