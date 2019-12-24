import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const ProyectosInfra = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc8="#656565"
                fc8="#fff" />
        <Dropdown data={props.data} />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.proyectosinfra.nombre} />
            <div className="contenido">
                <p>{props.data.areas.practica.area.proyectosinfra.uno}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.proyectosinfra.dos}</p>
                <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.proyectosinfra.bold}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.proyectosinfra.dospuntouno}</p> <br/><br/>
                <p>{props.data.areas.practica.area.proyectosinfra.tres}</p>
                <p>{props.data.areas.practica.area.proyectosinfra.cuatro}</p>
                <p>{props.data.areas.practica.area.proyectosinfra.cinco}</p>
            </div>
        </section>
    </div>
    )
}

export default ProyectosInfra;