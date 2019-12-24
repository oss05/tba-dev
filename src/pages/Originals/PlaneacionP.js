import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const PlaneacionP = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc7="#656565"
                fc7="#fff" />
        <Dropdown data={props.data} />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.planeacionp.nombre} />
            <div className="contenido">
                <p>{props.data.areas.practica.area.planeacionp.uno}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.planeacionp.dos}</p>
                <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.planeacionp.bold}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.planeacionp.dospuntouno}</p>
                <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.planeacionp.bold2}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.planeacionp.dospuntodos}</p>
                <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.planeacionp.bold3}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.planeacionp.dospuntotres}</p>
            </div>
        </section>
    </div>
    )
}

export default PlaneacionP;