import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const VentasDirec = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc12="#656565"
                fc12="#fff" />
                <Dropdown data={props.data} />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.ventasdirec.nombre} />
            <div className="contenido">
                <p style={{display:"inline"}}>{props.data.areas.practica.area.ventasdirec.uno}</p>
                <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.ventasdirec.bold}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.ventasdirec.unopuntouno}</p> <br/><br/>
                <p>{props.data.areas.practica.area.ventasdirec.dos}</p>
            </div>
        </section>
    </div>
    )
}

export default VentasDirec;