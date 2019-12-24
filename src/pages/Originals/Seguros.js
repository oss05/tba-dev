import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const Seguros = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc13="#656565"
                fc13="#fff" />
        <Dropdown data={props.data} />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.seguros.nombre} />
            <div className="contenido">
                <p style={{display:"inline"}}>{props.data.areas.practica.area.seguros.uno}</p>
                <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.seguros.bold}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.seguros.unopuntouno}</p><br/><br/>
                <p>{props.data.areas.practica.area.seguros.dos}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.seguros.tres}</p>
                <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.seguros.bold2}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.seguros.trespuntouno}</p>
            </div>
        </section>
    </div>
    )
}

export default Seguros;