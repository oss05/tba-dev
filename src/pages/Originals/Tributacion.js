import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';
import Responsable from '../../components/Responsable';


const Tributacion = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc10="#656565"
                fc10="#fff" />
                <Dropdown data={props.data} />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.tributacion.nombre} />
            <div className="contenido">
                <p style={{display:"inline"}}>{props.data.areas.practica.area.tributacion.uno}</p>
                <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.tributacion.bold}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.tributacion.unopuntouno}</p> <br/><br/>
                <p>{props.data.areas.practica.area.tributacion.dos}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.tributacion.tres}</p>
                <p style={{display:"inline" , fontWeight:"bold"}}>{props.data.areas.practica.area.tributacion.bold2}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.tributacion.trespuntouno}</p>
                <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.tributacion.bold3}</p>
            </div>
            {/* <Responsable 
            data={props.data}
            responsable="Mauricio Ambrosi Herrera"    
        /> */}
        </section>
    </div>
    )
}

export default Tributacion;