import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const Valores = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc11="#656565"
                fc11="#fff" />
                <Dropdown data={props.data} />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.valoresp.nombre} />
            <div className="contenido">
                <p style={{display:"inline"}}>{props.data.areas.practica.area.valoresp.uno}</p>
                <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.valoresp.bold}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.valoresp.unopuntouno}</p> <br/><br/>
                <p>{props.data.areas.practica.area.valoresp.dos}</p>
            </div>
        </section>
    </div>
    )
}

export default Valores;