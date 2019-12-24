import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const RepresenFiscal = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc9="#656565"
                fc9="#fff" />
        <Dropdown data={props.data} />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.represenfis.nombre} />
            <div className="contenido">
                <p>{props.data.areas.practica.area.represenfis.uno}</p>
                <p>{props.data.areas.practica.area.represenfis.dos}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.represenfis.tres}</p>
                <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.represenfis.bold}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.represenfis.trespuntouno}</p> <br/><br/>
                <p>{props.data.areas.practica.area.represenfis.cuatro}</p>
            </div>
        </section>
    </div>
    )
}

export default RepresenFiscal;