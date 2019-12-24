import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';

const InstitucionesAsist = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc4="#656565"
                fc4="#fff" />
        <Dropdown data={props.data} />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.institucionesasist.nombre} />
            <div className="contenido">
                <p>{props.data.areas.practica.area.institucionesasist.uno}</p>
                <p style={{display: "inline"}}>{props.data.areas.practica.area.institucionesasist.dos}</p>
                <p style={{display: "inline", fontWeight:"bold"}}>{props.data.areas.practica.area.institucionesasist.bold}</p> 
                <p style={{display: "inline"}}>{props.data.areas.practica.area.institucionesasist.dospuntouno}</p><br/><br/>
                <p style={{display: "inline"}}>{props.data.areas.practica.area.institucionesasist.tres}</p>
                <p style={{display: "inline", fontWeight:"bold"}}>{props.data.areas.practica.area.institucionesasist.bold2}</p> 
                <p style={{display: "inline"}}>{props.data.areas.practica.area.institucionesasist.trespuntouno}</p><br/><br/>
                <p>{props.data.areas.practica.area.institucionesasist.cuatro}</p>
                <p style={{display: "inline"}}>{props.data.areas.practica.area.institucionesasist.cinco}</p>
                <p style={{display: "inline", fontWeight:"bold"}}>{props.data.areas.practica.area.institucionesasist.bold3}</p>
                <p style={{display: "inline"}}>{props.data.areas.practica.area.institucionesasist.cincopuntouno}</p>
            </div>
        </section>
    </div>
    )
}

export default InstitucionesAsist;