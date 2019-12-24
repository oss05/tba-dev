import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const InstitucionesF = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc5="#656565"
                fc5="#fff" />
        <Dropdown data={props.data} />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.institucionesF.nombre} />
            <div className="contenido">
                <p>{props.data.areas.practica.area.institucionesF.uno}</p>
                <p>{props.data.areas.practica.area.institucionesF.dos}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.institucionesF.tres}</p>
                <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.institucionesF.bold}</p>
            </div>
        </section>
    </div>
    )
}

export default InstitucionesF;